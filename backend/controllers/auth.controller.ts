import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  res.send("signup Route");
};

export const signin = async (req: Request, res: Response) => {
  res.send("Signin Route");
};
export const logout = async (req: Request, res: Response) => {
  res.send("logout Route");
};
