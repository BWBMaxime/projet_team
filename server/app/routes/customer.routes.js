import { CustomerController } from "../controllers/index.js";

export const CustomerRouter = (app) => {
  app.post("/api/customers", CustomerController.create);
  app.put("/api/customers/:id", CustomerController.update);
  app.get("/api/customers", CustomerController.findAll);
  app.delete("/api/customers/:id", CustomerController.deleteById);
  app.get("/api/customers/:id", CustomerController.findById);
};
