import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

// importing Enironments
dotenv.config();

const app = express();

// default auth routes
app.use("/api/v1/auth", authRoutes);

// server port connection
app.listen(8000, () => {
  console.log("====================================");
  console.log("Hello Lucman you server is running at https://localhost:8000");
  console.log("====================================");
});
