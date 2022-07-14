import { UserController } from "../controllers/index.js";

export const router = (app) => {
  app.get("/users", UserController.findAll);
  app.get("/users/:id", UserController.findByQuery);
  app.post("/users", UserController.create);
  app.put("/users/:id", UserController.update);
  app.delete("/users/:id", UserController.deleteById);
};
