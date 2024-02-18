import { AuthController } from "../controllers/auth-controller";
import { UserModel } from "../../user/models/user-model";
import { AuthRepo } from "../repository/auth-repository";
import { AuthService } from "../services/auth-service";

class AuthFactury {
  static getInstance() {
    const authRepo = new AuthRepo(UserModel);
    const authService = new AuthService(authRepo);
    const authController = new AuthController(authService);

    return authController;
  }
}

export const authModule = AuthFactury.getInstance();
