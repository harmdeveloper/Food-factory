import orderModel from "../models/orderModel.js"
import userModel  from "../models/userModel.js"
import Stripe from  "stripe"

//stripe support

const stripe = new  Stripe(process.env.STRIPE_SECRET_KEY)


//placing user order from frontend
const getNextSequence = async (id) => {
    const counter = await counterModel.findOneAndUpdate(
      { id }, 
      { $inc: { seq: 1 } }, 
      { new: true, upsert: true }  // Creates a new counter if it doesn't exist
    );
    return counter.seq;
  };
  

import counterModel from "../models/counterModel.js"; // Import counter model

const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5174";
  
    try {
      // Get the next sequential orderId
      const nextOrderId = await getNextSequence('orderId');
  
      // Get the next sequential userId (only if required)
    //   const nextUserId = await getNextSequence('userId');
    // userId: nextUserId, 
  
      const newOrder = new orderModel({
        userId: req.body.userId,  
        orderId: nextOrderId,   // Set custom orderId with next sequence
        items: req.body.items,
        amount: req.body.amount,
        address: req.body.address
      });
  
      // Save the new order in DB
      await newOrder.save();
  
      // Clear user cart
      await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
  
      // Stripe payment logic remains the same
      const line_items = req.body.items.map(item => ({
        price_data: {
          currency: "pkr",
          product_data: { name: item.name },
          unit_amount: item.price * 100 * 90
        },
        quantity: item.quantity
      }));
  
      line_items.push({
        price_data: {
          currency: "pkr",
          product_data: { name: "Delivery Charges" },
          unit_amount: 2 * 100 * 90
        },
        quantity: 1
      });
  
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${frontend_url}/verify?success=true&orderId=${newOrder.orderId}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder.orderId}`,
      });
  
      res.json({ success: true, session_url: session.url });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  
//verify order
    const verifyOrder = async (req, res) => {
        const { orderId, success } = req.body;
        try {
            if (success === "true") {
                // Using custom orderId for search and updating the payment status
                await orderModel.findOneAndUpdate({ orderId: orderId }, { payment: true });
                res.json({ success: true, message: "Paid" });
            } else {
                // Respond with "Not Paid" without unnecessary DB update
                res.json({ success: false, message: "Not Paid" });
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" });
        }
    };
    

//user order for front end

    const userOrders = async (req,res)=>{
        try {
            const orders= await orderModel.find({userId:req.body.userId});
            res.json({success:true,data:orders})
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
    }

//listing order for admin pannel
const  listOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// api for updating status 
const  updateStatus = async (req,res)=>{
try {

  await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
  res.json({ success:true,message:"Status updated"})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
}



export {placeOrder,verifyOrder,userOrders,listOrders,updateStatus}
