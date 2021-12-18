import fk from "mongoose";
const { connect } = fk;
import { MONGODB_URI } from "./config";

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB connect to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
