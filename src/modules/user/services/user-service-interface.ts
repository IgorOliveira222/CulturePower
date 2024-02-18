import { UpdateUserDto } from "../dtos/update-user-Dto";
import { User } from "../models/user-model";

export interface IUserService {
  getAll(): Promise<Array<User>>;

  softDelete(id: string): Promise<User>;

  getUserById(id: string): Promise<User>;

  updateUser(id: string, newUserData: UpdateUserDto): Promise<User>;

  insertGems(id: string, insertGems: number): Promise<User>;
}
