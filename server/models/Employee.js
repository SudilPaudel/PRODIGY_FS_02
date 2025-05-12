import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String },
  department: { type: String },
  email: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
});

export default mongoose.model('Employee', employeeSchema);
