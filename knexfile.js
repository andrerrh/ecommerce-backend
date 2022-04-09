const { password } = require('./.env')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: {
    host: 'ec2-3-230-122-20.compute-1.amazonaws.com',
    database: 'd3bn5eri2pjkfq',
    user: 'wxgrtlknkroaxs',
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
