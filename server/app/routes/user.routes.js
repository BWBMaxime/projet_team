import { UserController } from "../controllers/index.js";
import {checkTokenMiddleware} from "../utils/jwt.js"


export const router = (app) => {
  app.post("/users/login", UserController.login);
  app.post("/users/create",checkTokenMiddleware, UserController.create);
  app.put("/users/update/:id",checkTokenMiddleware, UserController.update);
  app.get("/users", checkTokenMiddleware,UserController.findAll);
 // app.delete("/users/:id",checkTokenMiddleware, UserController.deleteById);



  /*
  app.get("/users/:id",checkTokenMiddleware, UserController.findByQuery);
  //app.post("/users",checkTokenMiddleware, UserController.create);

  app.delete("/users/:id",checkTokenMiddleware, UserController.deleteById);
  */
};
