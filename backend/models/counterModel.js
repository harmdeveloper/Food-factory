import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  id: { type: String, required: true },  // For distinguishing between userId and orderId
  seq: { type: Number, default: 0 }      // Sequence number
});

const counterModel = mongoose.model('Counter', counterSchema);

export default counterModel;
