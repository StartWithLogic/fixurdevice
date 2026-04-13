import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  device: String,
  issue: String,
  status: {
    type: String,
    default: "Pending"
  },
  price: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;