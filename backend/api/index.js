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
app.use(express.json());
app.use(cors());

// DB (safe call)
connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api", contactRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// IMPORTANT: no app.listen()
export default app;
