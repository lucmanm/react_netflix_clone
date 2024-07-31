import express from "express";
import { logout, signin, signup } from "../controllers/auth.controller";


const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/signin", signin);
authRoutes.post("/logout", logout);

export { authRoutes };
