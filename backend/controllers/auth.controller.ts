import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcryptjs from "bcryptjs"
import { generateTokenAndSetCokie } from "../utils/generateToken";
import { errorResponse, statusResponse } from "../lib/controller-response";


export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body

    // Validation

    if (!email || !password || !username) {
      return statusResponse(res, 400, "Missing input Required")
    }
    // Email RegEx
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return statusResponse(res, 400, "Invalid Email Address")
    }

    if (password.length < 6) {
      return statusResponse(res, 400, "Password must be at least 6 characters")
    }

    const existingUserByEmail = await User.findOne({ email })
    if (existingUserByEmail) {
      return statusResponse(res, 400, "Email Address already used.")
    }

    const existingUsername = await User.findOne({ username })
    if (existingUsername) {
      return statusResponse(res, 400, "Username Exist")
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    // TODO Backend Error duplicate
    const PRORFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PRORFILE_PICS[Math.floor(Math.random() * PRORFILE_PICS.length)];

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      image
    })

    if (newUser) {
      // generates token
      generateTokenAndSetCokie(newUser._id, res)
      // data save executin
      await newUser.save()
      // Response
      res.status(200).json({
        success: true,
        user: { ...newUser.__v, password: "" }
      })
    }

  } catch (error) {

    console.log("ERROR_SIGN_UP", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error"

    })
  }
};

// Sign In Function

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return errorResponse(res, "Missing Field Required")
    }

    const user = await User.findOne({ email })

    if (!user || !user.password) {
      return errorResponse(res, "Invalid Credentials")
    }


    const isPasswordCorrect = await bcryptjs.compare(password, user.password)

    if (!isPasswordCorrect) {
      return errorResponse(res, "Invalid Credentials")
    }

    generateTokenAndSetCokie(user?._id, res)

    res.status(200).json({
      success: true,
      user: {
        ...user._id,
        password: ""
      }
    })

  } catch (error) {
    console.log("ERROR_SIGNIN_CONTROL", error);
    statusResponse(res, 500, "Internal Server Error")
  }
};

// Logout Function
export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("jwt-netflix-token")
    statusResponse(res, 200, "Successfully Logged Out")

  } catch (error) {
    console.log("ERROR_LOGOUT_CONTROL", error);
    statusResponse(res, 500, "Internal Server Error")
  }
};


export const authCheck = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    res.status(200).json({ success: true, user: req.user })
  } catch (error) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" })
  }
}