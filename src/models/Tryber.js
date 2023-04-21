import mongoose from "mongoose";

const tryberSchema = new mongoose.Schema({
  id: { type: String },
  turma: { type: Number, require: true },
  nome: { type: String, require: true },
  email: { type: String, require: true },
  linkedin: { type: String, require: true },
  github: { type: String, require: true },
}, { versionKey: false });

const trybers = mongoose.model('trybers', tryberSchema);

export default trybers;