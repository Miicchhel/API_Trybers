import express from "express"
import trybersRoutes from "./trybersRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send({ message: "Bem-vindo a API_trybers" }));

  app.use(
    express.json(),
    trybersRoutes,
  );
}

export default routes;