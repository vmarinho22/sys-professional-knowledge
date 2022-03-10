/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .hasTable()
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("picture");
      table.timestamps(true, true);
    })
    .then(() =>
      knex("users").insert([
        {
          name: "root",
          email: "root",
          password:
            "$2a$10$CTIRgOtOxNhVFMmE5bV5a.VhnhMiCwohYF8IpnSkiX.8yVAr/KBcy",
        },
      ])
    );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
