import express from "express";
import dotenv from "dotenv";
import { databaseConection } from "./mongoDb/conect";
import { userRoutes } from "./modules/user/routes/user-routes";
import { authRoutes } from "./modules/auth/routes/auth-routes";
import { rescueProductRoutes } from "./modules/rescue/routes/rescue-routes";
import { itemRoutes } from "./modules/product/routes/item-routes";

dotenv.config();

databaseConection.initDb();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);
app.use(rescueProductRoutes);
app.use(itemRoutes);

app.listen(port, () => console.log(`server listining on port ${port}`));
