import { User } from "../../user/models/userModels";
import { LoginDTO } from "../dtos/login_dto";
import { registeUserDTO } from "../dtos/registerUserDTO";

export interface IAuthModule {
  authLogin(data: LoginDTO): Promise<User | null>;

  registerUser(dataUser: registeUserDTO): Promise<User | null>;
}
