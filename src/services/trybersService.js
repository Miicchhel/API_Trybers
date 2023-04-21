import trybers from "../models/Tryber.js"

const getAllTrybers = async () => {
  const response = await trybers.find();
  return response;
}

const getTrybersByEmail = async (email) => {
  const response = await trybers.find();
  const responseFrintered = response.filter((item) => item.email === email)
  return responseFrintered;
}

const insertTryber = async (body) => {
  if ((await getTrybersByEmail(body.email)).length === 1) return null 
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
  updateTryber,
  removeTryber,
  getTrybersByEmail,
}