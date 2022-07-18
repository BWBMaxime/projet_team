import { CommandController } from "../controllers/index.js";

export const CommandRouter = (app) => {
  app.post("/api/commands", CommandController.create);
  app.put("/api/commands/:id", CommandController.update);
  app.get("/api/commands", CommandController.findAll);
  app.delete("/api/commands/:id", CommandController.deleteById);
  app.get("/api/commands/:id", CommandController.findById);
};
