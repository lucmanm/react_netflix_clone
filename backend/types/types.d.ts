import { User } from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

type TPerson = {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
}