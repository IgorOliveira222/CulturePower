import { Model } from "mongoose";
import { User } from "../models/user-model";
import { UpdateUserDto } from "../dtos/update-user-Dto";
import { IUserRepository } from "./user-repository-interface";

export class UserRepo implements IUserRepository {
  constructor(private userModel: Model<User>) {}

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find({ deletedAt: null });
    return users;
  }

  async softDelete(id: string): Promise<User | null> {
    const deleteUser = await this.userModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );

    return deleteUser;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userModel.findById({ _id: id });
    return user;
  }

  async updateUser(
    id: string,
    newUserData: UpdateUserDto
  ): Promise<User | null> {
    const user = await this.userModel.findByIdAndUpdate(id, newUserData, {
      new: true,
    });

    return user;
  }

  async insertGems(id: string, insertGems: number): Promise<User | null> {
    const insertGemsUser = await this.userModel.findByIdAndUpdate(
      id,
      { gems: insertGems },
      { new: true }
    );
    return insertGemsUser;
  }
}
