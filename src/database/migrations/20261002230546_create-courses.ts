import type { Knex } from "knex";

// Create the courses table
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses", (table) => {
    (table.increments("id").primary(),
      table.string("name").notNullable(),
      table.timestamp("created_at").defaultTo(knex.fn.now()));
  });
}

// Drop the courses table
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("courses");
}
