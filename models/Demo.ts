import mongoose from "mongoose";

const DemoSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Demo ||
  mongoose.model("Demo", DemoSchema);