import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

app.get("/courses", async (request: Request, response: Response) => {
  const coursesRaw = await knex.raw("Select * from courses");
  console.log(coursesRaw);
  const courses = await knex("courses").select().orderBy("name", "asc");
  return response.json(courses);
});

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  await knex("courses").insert({ name });
  // Insert using raw SQL query
  // await knex.raw("Insert into courses (name) values (?)", [name]);

  return response.status(201).json({ name });
});

app.put("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name } = request.body;

  await knex("courses").update({ name }).where({ id });

  return response.status(200).json();
});

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  await knex("courses").delete().where({ id });
  return response.json();
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
