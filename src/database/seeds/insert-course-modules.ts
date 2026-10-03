import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex("table_name").del();

  // Inserts seed entries
  await knex("courses").insert([
    { name: "CSS" },
    { name: "Typescript" },
    { name: "NodeJS" },
    { name: "ReactJS" },
    { name: "React Native" },
    { name: "NextJS" },
    { name: "C#" }
  ]);
}
