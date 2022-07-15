import { UserController } from "../controllers/index.js";
import {checkTokenMiddleware} from "../utils/jwt.js"

export const router = (app) => {
  app.post("/api/users/login", UserController.login);
  app.post("/api/users",checkTokenMiddleware, UserController.create);
  app.put("/api/users/:id",checkTokenMiddleware, UserController.update);
  app.get("/api/users", checkTokenMiddleware,UserController.findAll);
  app.delete("/api/users/:id",checkTokenMiddleware, UserController.deleteById);
  app.get("/api/users/:id",checkTokenMiddleware, UserController.findById);
};
