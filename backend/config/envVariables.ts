import dotenv from "dotenv";

// importing Enironments
dotenv.config();

// Enviroment Variables
export const ENV_VARS = {
  MONGO_URI: process.env.MONGODB_DB_URI,
  PORT: process.env.PORT || 8000,
};
