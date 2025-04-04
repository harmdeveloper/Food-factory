import mongoose from  "mongoose";

export const connectDB = async () => {
     await mongoose.connect('mongodb+srv://harmfatima:M3zb5QFpXqmirMNU@harmcluster.wibtz.mongodb.net/food-del').then(()=>console.log("DB Connected")
    );
}

