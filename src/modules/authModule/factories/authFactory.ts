import { AuthController } from './../controlles/authController';
import { UserModel } from "../../user/models/userModels"
import { AuthRepo } from "../repo/authModuleRepo"
import { AuthService } from "../service/authService"

class AuthFactory{
    static getIntance(){
        const authRepo = new AuthRepo(UserModel);
        const authService = new AuthService(authRepo);
        const authController = new AuthController(authService) ;
        return authController;
    }
}

export const auth = AuthFactory.getIntance();