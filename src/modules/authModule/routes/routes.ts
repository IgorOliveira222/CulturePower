import { Router } from "express";
import { auth } from "../factories/authFactory";

export const authRoutes = Router()

authRoutes.post('/login', auth.login.bind(auth))