import { UserController } from "../controllers/index.js";
import {checkTokenMiddleware,extractBearerToken} from "../utils/jwt.js"


export const router = (app) => {
  app.get("/users",checkTokenMiddleware, UserController.findAll);
  app.get("/users/:id",checkTokenMiddleware, UserController.findByQuery);
  app.post("/users",checkTokenMiddleware, UserController.create);
  app.put("/users/:id",checkTokenMiddleware, UserController.update);
  app.delete("/users/:id",checkTokenMiddleware, UserController.deleteById);
};
