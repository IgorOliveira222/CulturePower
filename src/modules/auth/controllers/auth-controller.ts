import { Request, Response } from "express";
import { IAuthService } from "../services/auth-service-interface";
import { signInValidator } from "../utils/singInValidator";
import { IAuthController } from "./auth-controller-interface";
import { signUpUserValidator } from "../utils/signUpUserValidator";

export class AuthController implements IAuthController {
  constructor(private authService: IAuthService) {}

  async signIn(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      await signInValidator.validate(
        { email: email, password: password },
        { abortEarly: true }
      );
      const userData = await this.authService.signIn({
        email: email,
        password: password,
      });
      res.status(200).json({ user: userData?.user, token: userData?.token });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async signUpUser(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      await signUpUserValidator.validate(body, { abortEarly: true });
      const user = await this.authService.signUpUser(body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async loggedUser(req: Request, res: Response): Promise<void> {
    try {
      const { authorization } = req.headers;
      const [, token]: any = authorization?.split(" ");
      const user = await this.authService.loggedUser(token);
      res.status(200).json({ message: "aqui", user });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
