/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgresql',
  connection: {
    host: '',
    database: '',
    user: '',
    port: ,
    password: '',
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
