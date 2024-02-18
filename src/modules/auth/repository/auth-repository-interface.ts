import { User } from "../../user/models/user-model";
import { SignInDTO } from "../dtos/signIn-DTOS";
import { SignUpUserDTO } from "../dtos/signUp-user-DTO";

export interface IAuthRepo {
  signIn(signInData: SignInDTO): Promise<User | null>;
  signUpUser(userData: SignUpUserDTO): Promise<User | null>;
}
