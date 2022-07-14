import { MongoClient, ServerApiVersion } from "mongodb";
import { URI } from "../config/db.config.js";

export const connection = new MongoClient(
  "mongodb+srv://digi_team:LGxSjzJH5GUOY2pE@cluster0.yy6y9e9.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }
);
export const database = connection.db("projet_team_db");
export const usersData = database.collection("user");
