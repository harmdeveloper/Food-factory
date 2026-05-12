import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import contactRouter from "./routes/contactRoute.js";
import 'dotenv/config';
import path from "path";

// app config
const app = express();

// middleware
app.use(express.json());

// CORS
app.use(cors({
  origin:[
    "https://food-factory-frontend.vercel.app",
    "https://food-factory-admin-swart.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// db
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("DB Connected");
  } catch (err) {
    console.log("DB Error:", err.message);
  }
};

startDB();


// routes
app.use("/api/food", foodRouter);
app.use("/images", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api", contactRouter);

// test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running on Vercel 🚀" });
});

// ❌ NO app.listen in Vercel
export default app;
