import { UserController } from "../controller/user-controller";
import { UserModel } from "../models/user-model";
import { UserRepo } from "../repository/user-repository";
import { UserService } from "../services/user-service";

class UserFactory {
  static getInstance() {
    const userRepo = new UserRepo(UserModel);
    const userService = new UserService(userRepo);
    const userController = new UserController(userService);

    return userController;
  }
}

export const userModule = UserFactory.getInstance();
