import { UpdateUserDto } from "../dtos/update-user-Dto";
import { User } from "../models/user-model";

export interface IUserRepository {
  getAll(): Promise<Array<User>>;

  softDelete(id: string): Promise<User | null>;

  getUserById(id: string): Promise<User | null>;

  updateUser(id: string, newUserData: UpdateUserDto): Promise<User | null>;

  insertGems(id: string, insertGems: number): Promise<User | null>;
}
