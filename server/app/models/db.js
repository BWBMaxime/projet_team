import { MongoClient, ServerApiVersion } from "mongodb";
import { URI } from "../config/config.js";

export const connection = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
export const database = connection.db("projet_team_db");
export const usersData = database.collection("user");
