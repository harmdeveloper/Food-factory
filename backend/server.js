import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import contactRouter from "./routes/contactRoute.js";
import 'dotenv/config';

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());

// ✅ FIXED CORS
app.use(cors({
  origin: [
    "https://food-factory-frontend.vercel.app",
    "https://food-factory-admin-swart.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// db
connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api", contactRouter);

// test route
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
