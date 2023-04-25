import mongoose from "mongoose";

const tryberSchema = new mongoose.Schema({
  id: { type: String },
  turma: { type: Number, require: true },
  nome: { type: String, required: true, maxlength: 150 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} não é um e-mail válido!`
    }
  },
  linkedin: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9-]{1,}\/?$/.test(v);
      },
      message: props => `${props.value} não é um link do LinkedIn válido!`
    }
  },
  github: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]{1,}\/?$/.test(v);
      },
      message: props => `${props.value} não é um link do GitHub válido!`
    }
  }
}, { versionKey: false });

const trybers = mongoose.model('trybers', tryberSchema);

export default trybers;