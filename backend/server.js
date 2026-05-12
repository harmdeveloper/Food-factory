//basic module type server
import express from  "express"
import cors from  "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import contactRouter from "./routes/contactRoute.js"

//app config
const app = express()
// const port = 4000;
const port = process.env.PORT || 4000;

//middlware
app.use(express.json())
//access baclend from any front end
const cors = require("cors");

app.use(cors({
  origin: [
    "https://food-factory-93r8.vercel.app",
    "https://food-factory-93r8-8cavqgp0l-harms-projects.vercel.app"
  ],
  credentials: true
}));

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api",contactRouter)



//http method to req data from  server
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
