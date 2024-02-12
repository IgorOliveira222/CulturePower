import { User } from "../../user/models/userModels";
import { LoginDTO } from "../dtos/login_dto";
import { registeUserDTO } from "../dtos/registerUserDTO";

export interface IAuthService {
  //  LoginDTO(arg0: { email: any; password: any; }): unknown;
  authLogin(login: LoginDTO): Promise<{ user: User; token: string } | null>;
  registerUser(
    dataUser: registeUserDTO
  ): Promise<{ newUser: User; token: string } | null>;
}
