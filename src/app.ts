import express from "express";
import dotenv from "dotenv";
import { databaseConection } from "./mongoDb/conect";
import { userRoutes } from "./modules/user/routes/user-routes";
import { authRoutes } from "./modules/auth/routes/auth-routes";

dotenv.config();

databaseConection.initDb();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

app.listen(port, () => console.log(`server listining on port ${port}`));
