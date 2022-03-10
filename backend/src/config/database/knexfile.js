// require('dotenv').config({ path: '../../../.env' });
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const knexFile = {

  development: {
    client: "pg",
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: "pg",
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

module.exports = knexFile;