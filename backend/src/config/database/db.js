const knex = require('knex');
const knexFile = require('./knexfile');
require('dotenv').config({ path: '../../../.env' });

const database = knex(process.env.NODE_ENV == "development" ? knexFile.development : knexFile.production);

module.exports = database;