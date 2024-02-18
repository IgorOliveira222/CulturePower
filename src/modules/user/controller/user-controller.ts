import { Request, Response } from "express";
import { IUserController } from "./user-controller-interface";
import { IUserService } from "../services/user-service-interface";
import { updateUserValidator } from "../utils/updateUserValidator";
import { userInsertGemsValidator } from "../utils/userInsertGemsValidator";
import { getUserByEmailValidator } from "../utils/getUserByEmailValidator";

export class UserController implements IUserController {
  constructor(private userService: IUserService) {}

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async softDelete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleteUser = await this.userService.softDelete(id);
      res.status(200).json(deleteUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;
      await updateUserValidator.validate({ body: body }, { abortEarly: true });
      const updadeUser = await this.userService.updateUser(id, body);

      res.status(200).json(updadeUser);
    } catch (error: any) {
      res.status(500).json({ message: error });
    }
  }

  async insertGems(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { insertGems } = req.body;
      await userInsertGemsValidator.validate(
        { insertGems },
        { abortEarly: true }
      );
      const userGems = await this.userService.insertGems(id, insertGems);

      res.status(200).json(userGems);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
