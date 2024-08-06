import express from "express";
import { authCheck, logout, signin, signup } from "../controllers/auth.controller";
import { protectRoute } from "../middleware/protectRoute";


const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/signin", signin);
authRoutes.post("/logout", logout);
authRoutes.get("/authcheck", protectRoute, authCheck);

export { authRoutes };
