import { Model } from "mongoose";
import { User } from "../../user/models/userModels";
import { IAuthModule } from "./authModuleRepo-interface";
import { LoginDTO } from "../dtos/login_dto";

export class AuthRepo implements IAuthModule {
    constructor(private userModule : Model<User>){}
    async authLogin(data:LoginDTO): Promise<User | null> {
        const {email}= data
        const user = await this.userModule.findOne({email}).select("+password")
        return user
    }
}