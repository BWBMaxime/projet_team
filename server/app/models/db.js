import { MongoClient, ServerApiVersion } from "mongodb";
import { URI } from "../config/config.js";

export const connection = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
export const database = connection.db("projet_team_db");
export const UsersData = database.collection("user");
export const VehiclesData = database.collection("vehicle");
export const CustomersData = database.collection("customer");
export const CommandsData = database.collection("command");
