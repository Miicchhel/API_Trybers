import express from "express";
import trybersController from "../controllers/trybersController.js"

const router = express.Router();

router
  .get("/trybers", trybersController.getAllTrybers)


export default router;