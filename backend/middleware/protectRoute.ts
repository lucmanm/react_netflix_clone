import jwt, { JwtPayload } from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import { ENV_VARS } from "../config/envVariables";
import { User } from "../models/user.model";

type CustomJwtPayload = JwtPayload & {
    userId: string;
}
export const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies["jwt-netflix-token"]

        if (!token) {
            return res.status(401).json({ success: false, message: "UnAuthorized - NO Token" })
        }

        if (!ENV_VARS.JWT_SECRET_KEY) {
            return res.status(500).json({ success: false, message: "Internal Server Error - Missing Secret Key" });
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET_KEY) as CustomJwtPayload
        if (!decoded) {
            return res.status(401).json({ success: false, message: "UnAuthorized - NO Token" })
        }

        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(404).json({ success: false, message: "User not Found" })
        }
        // TODO : typescript_error
        // error TS2339: Property 'user' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>'.
        //req.user = {user}

        // @ts-ignore
        req.user =  user

        next()
    } catch (error) {

        if (error instanceof Error) {
            console.log("ERROR_PROTECTED_ROUTE", error.message);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        } else {
            console.log("ERROR_PROTECTED_ROUTE", "An unknown error occurred");
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }

    }
}