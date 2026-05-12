//basic module type server
import cors from  "cors"
import express from  "express"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import contactRouter from "./routes/contactRoute.js"

const cors = require("cors");
//app config
const app = express()
// const port = 4000;
const port = process.env.PORT || 4000;

//middlware
app.use(express.json())
//access baclend from any front end


app.use(cors({
  origin: [
    "https://food-factory-c8qcaq140-harms-projects.vercel.app",
    "https://food-factory-rho.vercel.app/"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
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
