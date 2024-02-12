import {IAuthService} from "../service/authService_interface"
import {IAuthController} from "./authController-interface"
import { authValedation } from '../utils/authValidation';
import { Request, Response } from "express";

export class AuthController implements IAuthController {
    constructor(private authService:IAuthService){}

    async login(req: Request, res:Response):Promise<void>{
        try {
            const {email,password} = req.body
            console.log(req.body)
            await authValedation.validate({email:email,password:password},{abortEarly:false})
            const userData = await this.authService.authLogin({email:email, password:password})
            res.status(200).json({user:userData?.user,token: userData?.token})
        }catch (error: any){
            res.status(500).json({error: error.message})
        }
    }
}
