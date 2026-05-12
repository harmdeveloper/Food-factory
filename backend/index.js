import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "../config/db.js";
import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";
import contactRouter from "../routes/contactRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "https://food-factory-frontend.vercel.app",
    "https://food-factory-admin-swart.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// DB connect
connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/contact", contactRouter);

app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ success: true, message: "Backend Working 🚀" });
});

export default app;
