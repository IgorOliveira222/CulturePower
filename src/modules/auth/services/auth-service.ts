import { User } from "../../user/models/user-model";
import jwt from "jsonwebtoken";
import { IAuthRepo } from "../repository/auth-repository-interface";
import { IAuthService } from "./auth-service-interface";
import bcrypt from "bcrypt";
import "dotenv/config";
import { SignUpUserDTO } from "../dtos/signUp-user-DTO";
import { SignInDTO } from "../dtos/signIn-DTOS";

export class AuthService implements IAuthService {
  constructor(private authRepo: IAuthRepo) {}

  async signIn(
    signInData: SignInDTO
  ): Promise<{ user: User; token: string } | null> {
    const user = await this.authRepo.signIn(signInData);

    if (!user || !user.password) throw new Error("Invailed email");

    const userPassword = user.password;
    const isPasswordValid = await bcrypt.compare(
      signInData.password,
      userPassword
    );

    if (!isPasswordValid) throw new Error("Invalid Password");

    const payload = { ...user };
    const secret = process.env.JWT_SECRET as string;
    const option = { expiresIn: "1d" };
    const token = jwt.sign(payload, secret, option);
    return { user, token };
  }

  async signUpUser(newData: SignUpUserDTO): Promise<User> {
    newData.password = await bcrypt.hash(newData.password, 10);

    const newUser = await this.authRepo.signUpUser(newData);

    if (!newUser) throw new Error("Invalid User");

    return newUser;
  }

  async loggedUser(token: string): Promise<User | null> {
    if (!token) throw new Error("token invalid, expires or user not logged!");
    const decodingUser: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );
    const user: User = { ...decodingUser._doc };

    return user;
  }
}
