import trybersService from "../services/trybersService.js";

const getAllTrybers = async (req, res) => {
  const trybers = await trybersService.getAllTrybers()
  return res.status(200).json(trybers);
}

export default {
  getAllTrybers
}