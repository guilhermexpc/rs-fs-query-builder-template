import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
  response.json({ message: "Hello World!" });
});

app.post("/course", async (request: Request, response: Response) => {
  const { name } = request.body;

  await knex("courses").insert({ name });

  response.status(201).json({ name });
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
