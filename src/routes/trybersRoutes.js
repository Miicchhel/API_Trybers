import express from "express";
import trybersController from "../controllers/trybersController.js"

const router = express.Router();

router
  .get("/api/v1/trybers", trybersController.getAllTrybers)
  .get("/api/v1/trybers/email/:email", trybersController.getTrybersByEmail)
  .post("/api/v1/trybers", trybersController.insertTryber)
  .put("/api/v1/trybers/:id", trybersController.updateTryber)
  .delete("/api/v1/trybers/:id", trybersController.removeTryber)


export default router;