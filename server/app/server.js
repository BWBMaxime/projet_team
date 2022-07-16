import express from "express";
import bodyParser from "body-parser";
import { UserRouter, VehicleRouter } from "./routes/index.js";
const app = express();
const appPort = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (request, repsonse) => {
  repsonse.json({
    message: "welcome API TEAM",
  });
});

UserRouter(app);
VehicleRouter(app);

app.listen(appPort, () => {
  console.log(`Server listening at port ${appPort}`);
});
