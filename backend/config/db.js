import mongoose from "mongoose";
import { ENV_VARS } from "./envVariables.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("Connect" + connection.connection.host);
  } catch (error) {
    console.error("ERROR_CONNECTION_MONGODB" + error.message);
    process.exit(1); //1 emans there is an error, 0 means success
  }
};
