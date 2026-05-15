import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "../config/db.js";

import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";
import contactRouter from "../routes/contactRoute.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect (IMPORTANT: call once safely)
connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api", contactRouter);

// test route
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

// IMPORTANT for Vercel
export default app;
