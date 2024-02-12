import express, { Router } from "express";
import dotenv from "dotenv";
import { databaseConection } from "./mongoDb/conect";
import { authRoutes } from "./modules/authModule/routes/routes";
import { userRoutes } from "./modules/user/routes/userRoutes";

dotenv.config();

databaseConection.initDb();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  // res.json({message:'Hello World'})
  res.send("Hello World");
});

app.listen(port, () => console.log(`server listining on port ${port}`));
