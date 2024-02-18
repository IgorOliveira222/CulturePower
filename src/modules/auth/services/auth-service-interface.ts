import { User } from "../../user/models/user-model";
import { SignInDTO } from "../dtos/signIn-DTOS";
import { SignUpUserDTO } from "../dtos/signUp-user-DTO";

export interface IAuthService {
  signIn(singInData: SignInDTO): Promise<{ user: User; token: string } | null>;
  signUpUser(newUser: SignUpUserDTO): Promise<User>;

  loggedUser(token: string): Promise<User | null>;
}
