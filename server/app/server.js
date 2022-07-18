import express from "express";
import bodyParser from "body-parser";

import cors from "cors";
import {
  CommandRouter,
  CustomerRouter,
  UserRouter,
  VehicleRouter,
} from "./routes/index.js";
const app = express();
const appPort = 4000;

app.use(cors());
//app.use(fileupload());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(express.static("files"));
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
CustomerRouter(app);
CommandRouter(app);

app.listen(appPort, () => {
  console.log(`Server listening at port ${appPort}`);
});
