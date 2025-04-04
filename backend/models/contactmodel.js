// models/contactModel.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String },
    message: { type: String },
}, { timestamps: true });

const contactModel = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default contactModel;
