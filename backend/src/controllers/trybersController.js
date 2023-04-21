import trybersService from "../services/trybersService.js";

const getAllTrybers = async (_req, res) => {
  const trybers = await trybersService.getAllTrybers()
  return res.status(200).json(trybers);
}

const getTrybersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const tryber = await trybersService.getTrybersByEmail(email);
    return res.status(200).json(tryber);
  } catch (error) {
    res.status(400).send({ message: `${error.message} - o email:${ email } não consta no banco de dados`});
  }
}

const insertTryber = async (req, res) => {
  try {
    const newTryber = await trybersService.insertTryber(req.body)
    if (!newTryber) return res.status(409).json('Email já existe');
    res.status(201).json(newTryber);
  } catch (error) {
    res.status(500).send({ message: `${error.message} - falha ao cadastrar o Tryber`});
  }
}

const updateTryber = async (req, res) => {
  try {
    const { id } = req.params;
    await trybersService.updateTryber(id, req.body);
    res.status(200).send({ message: 'Tryber atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: `${error.message} - falha ao atualizar o Tryber`});
  }
}

const removeTryber = async (req, res) => {
  try {
    const { id } = req.params;
    await trybersService.removeTryber(id)
    res.status(200).send({ message: 'Tryber deletado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: `${error.message} - falha ao deletar o Tryber`});
  }
}

export default {
  getAllTrybers,
  insertTryber,
  // getTrybersById,
  updateTryber,
  removeTryber,
  getTrybersByEmail,
}