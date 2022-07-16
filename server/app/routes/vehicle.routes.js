import { VehicleController } from "../controllers/index.js";

export const VehicleRouter = (app) => {
  app.post("/api/vehicles", VehicleController.create);
  app.put("/api/vehicles/:id", VehicleController.update);
  app.get("/api/vehicles", VehicleController.findAll);
  app.delete("/api/vehicles/:id", VehicleController.deleteById);
  app.get("/api/vehicles/:id", VehicleController.findById);
};
