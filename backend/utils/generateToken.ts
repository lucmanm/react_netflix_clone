import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVariables"
import { Response } from "express"
import { Document, Types } from "mongoose"
export const generateTokenAndSetCokie = (userId: Types.ObjectId, res: Response) => {

    if (!ENV_VARS.JWT_SECRET_KEY) {
        throw new Error("JWT KEY IS NOT DEFINED")
    }

    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET_KEY, { expiresIn: "15d" })

    res.cookie("jwt-netflix-token", token, {
        httpOnly: true, //cannot be access by javascript
        secure: process.env.NODE_ENV !== "development",
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        sameSite: "strict" //CSRF attacks crooss sitre request forges attacks
    });

    return token
}