import express from "express";
import trybersController from "../controllers/trybersController.js"

const router = express.Router();

router
  .get("/trybers", trybersController.getAllTrybers)
  .get("/trybers/email/:email", trybersController.getTrybersByEmail)
  .post("/trybers", trybersController.insertTryber)
  .put("/trybers/:id", trybersController.updateTryber)
  .delete("/trybers/:id", trybersController.removeTryber)


export default router;