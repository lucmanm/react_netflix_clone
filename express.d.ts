import { User } from "./backend/models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
