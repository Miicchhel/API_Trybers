import trybers from "../models/Tryber.js"

const getAllTrybers = async (req, res) => {
  const response = await trybers.find();
  return response;
}

// const getTryberById = async (req, res) => {
//   const response = await trybers.find();
//   return response;
// }

export default {
  getAllTrybers,
  // getAllTrybers
}