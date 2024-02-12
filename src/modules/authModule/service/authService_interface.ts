import { User } from "../../user/models/userModels";
import { LoginDTO } from "../dtos/login_dto";



export interface IAuthService {
//  LoginDTO(arg0: { email: any; password: any; }): unknown;
    authLogin(login:LoginDTO): Promise<{user: User, token:string} | null>
}