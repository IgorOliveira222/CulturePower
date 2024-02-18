import { UpdateUserDto } from "../dtos/update-user-Dto";
import { User } from "../models/user-model";
import { IUserService } from "./user-service-interface";
import { IUserRepository } from "../repository/user-repository-interface";

export class UserService implements IUserService {
  constructor(private userRepo: IUserRepository) {}

  async getAll(): Promise<User[]> {
    const users = await this.userRepo.getAll();

    if (!users || users.length === 0) {
      throw new Error("User not found");
    }
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    return user;
  }

  async softDelete(id: string): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    const deleteUser = await this.userRepo.softDelete(id);

    if (!deleteUser) throw new Error("User not found");

    return deleteUser;
  }

  async updateUser(id: string, newUserData: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    const updateUser = await this.userRepo.updateUser(id, newUserData);

    if (!updateUser) throw new Error("User not update");

    return updateUser;
  }

  async insertGems(id: string, insertGems: number): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    if (insertGems < 0) throw new Error("add value bigger then zero");

    if (insertGems > 100) throw new Error("maximum gems value is 100 ");

    const gems: number = user.gems;

    const newGems = gems + insertGems;

    const insertGemsUser = await this.userRepo.insertGems(id, newGems);

    if (!insertGemsUser) throw new Error("Error adding gems");

    return insertGemsUser;
  }
}
