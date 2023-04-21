import trybers from "../models/Tryber.js"

const getAllTrybers = async () => {
  const response = await trybers.find();
  return response;
}

const getTrybersById = async (id) => {
  const response = await trybers.findById(id)
  return response;
}

const insertTryber = async (body) => {
  const tryber = new trybers(body)
  return tryber.save();
}

const updateTryber = async (id, body) => {
  await trybers.findByIdAndUpdate(id, { $set: body });
}

const removeTryber = async (id) => {
  await trybers.findByIdAndDelete(id);
}

export default {
  getAllTrybers,
  insertTryber,
  getTrybersById,
  updateTryber,
  removeTryber,
}