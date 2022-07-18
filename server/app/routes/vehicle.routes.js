import { VehicleController } from "../controllers/index.js";
import { checkTokenMiddleware } from "../utils/jwt.js";



export const VehicleRouter = (app) => {
  app.post("/api/vehicles", checkTokenMiddleware,VehicleController.create);
  app.put("/api/vehicles/:id",checkTokenMiddleware, VehicleController.update);
  app.get("/api/vehicles", checkTokenMiddleware,VehicleController.findAll);
  app.delete("/api/vehicles/:id", VehicleController.deleteById);
  app.get("/api/vehicles/:id", VehicleController.findById);
};
