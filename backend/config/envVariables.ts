import dotenv from "dotenv";

// importing Enironments
dotenv.config();

// Enviroment Variables
export const ENV_VARS = {
  MONGO_URI: process.env.MONGODB_DB_URI,
  PORT: process.env.PORT || 8000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  TMBD_DOMAIN_KEY: process.env.TMBD_DOMAIN_KEY
};

