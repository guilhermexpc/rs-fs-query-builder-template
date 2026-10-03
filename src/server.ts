import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

app.get("/courses", async (request: Request, response: Response) => {
  const coursesRaw = await knex.raw("Select * from courses");
  console.log(coursesRaw);
  const courses = await knex("courses").select().orderBy("name", "asc");
  response.json(courses);
});

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  await knex("courses").insert({ name });
  // Insert using raw SQL query
  // await knex.raw("Insert into courses (name) values (?)", [name]);

  response.status(201).json({ name });
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
