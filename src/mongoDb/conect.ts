import mongoose from "mongoose";

const database = mongoose;

export class databaseConection {
  static async initDb() {
    try {
      database.connection.on("connected", () => console.log("Connected DB"));
      database.connection.on("disconnected", () =>
        console.log("Disconnected DB")
      );
      database.connection.on("open", () => console.log("Open DB"));
      database.connection.on("close", () => console.log("Close DB"));
      await database.connect(process.env.URL_DB as string, {
        serverSelectionTimeoutMS: 5000,
        dbName: "CulturePower",
        serverApi: {
          version: "1",
          strict: true,
          deprecationErrors: true,
        },
      });
    } catch (error: any) {
      console.log({ mensagem: error.message });
    }
  }
}
