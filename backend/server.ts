import express from "express";
import cookieParser from "cookie-parser"
import { ENV_VARS } from "./config/envVariables";
import { connectDB } from "./config/db";
import { protectRoute } from "./middleware/protectRoute";
// Routes
import { authRoutes } from "./routes/auth.route"
import { movieRoutes } from "./routes/movie.route"
import { tvShowRoutes } from "./routes/tvshow.route"
import { searchRoutes } from "./routes/search.route";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()) //this will allow us ti parse the request body
app.use(cookieParser())

// default auth routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tvshow", protectRoute, tvShowRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// server port connection
app.listen(PORT, () => {
  console.log("=================================================================");
  console.log("Hello Lucman you server is running at http://localhost:" + PORT);
  console.log("=================================================================");
  connectDB();
});

