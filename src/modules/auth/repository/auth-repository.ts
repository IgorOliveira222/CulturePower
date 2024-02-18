import { Model } from "mongoose";
import { User } from "../../user/models/user-model";
import { IAuthRepo } from "./auth-repository-interface";
import { SignUpUserDTO } from "../dtos/signUp-user-DTO";
import { SignInDTO } from "../dtos/signIn-DTOS";

export class AuthRepo implements IAuthRepo {
  constructor(private userModule: Model<User>) {}

  async signIn(signInData: SignInDTO): Promise<User | null> {
    const { email } = signInData;
    const user = await this.userModule.findOne({ email }).select("+password");
    return user;
  }

  async signUpUser(userData: SignUpUserDTO): Promise<User | null> {
    const newUser = await this.userModule.create(userData);
    return newUser;
  }
}
