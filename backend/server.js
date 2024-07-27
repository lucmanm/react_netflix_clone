import express from "express";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVariables.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

// default auth routes
app.use("/api/v1/auth", authRoutes);

// server port connection
app.listen(PORT, () => {
  console.log("=================================================================");
  console.log("Hello Lucman you server is running at https://localhost:" + PORT);
  console.log("=================================================================");
  connectDB();
});
