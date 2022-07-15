import { UserController } from "../controllers/index.js";
import {checkTokenMiddleware} from "../utils/jwt.js"


export const router = (app) => {
  app.post("/login", UserController.login);
  app.post("/register",checkTokenMiddleware, UserController.register);







  app.get("/users", UserController.findAll);
  /*
  app.get("/users/:id",checkTokenMiddleware, UserController.findByQuery);
  //app.post("/users",checkTokenMiddleware, UserController.create);
  app.put("/users/:id",checkTokenMiddleware, UserController.update);
  app.delete("/users/:id",checkTokenMiddleware, UserController.deleteById);

  */


};
