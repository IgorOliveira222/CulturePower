import { User } from "../../user/models/userModels";
import { LoginDTO } from "../dtos/login_dto";
import { IAuthModule } from "../repo/authModuleRepo-interface";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export class AuthService implements AuthService {
    constructor(private authRepo:IAuthModule){}
    async authLogin(data:LoginDTO): Promise<{user: User, token: string} | null>{

        const user = await this.authRepo.authLogin(data)

        if(!user || !user.password) throw new Error("Invaled Email")
        const userPassword = user.password 
        const isPasswordValed = await bcrypt.compare(data.password, user.password)

        if(!isPasswordValed) throw new Error("Invaled Password")

        const payload = {...user}
        const secret = process.env.JWT_SECRET as string
        const options = {expiresIn: "1d"}
        const token = jwt.sign(payload, secret, options)

        return{user, token}
    }
}