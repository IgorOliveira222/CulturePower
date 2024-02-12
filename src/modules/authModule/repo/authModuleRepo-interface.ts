import { User } from "../../user/models/userModels";
import { LoginDTO } from "../dtos/login_dto";

export interface IAuthModule{

    authLogin(data:LoginDTO):Promise<User | null>
}