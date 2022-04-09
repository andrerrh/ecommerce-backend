/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgresql',
  connection: {
    host: 'ec2-3-230-122-20.compute-1.amazonaws.com',
    database: 'd3bn5eri2pjkfq',
    user: 'wxgrtlknkroaxs',
    port: 5432,
    password: '208110fe7c016c4727518c22bdb83ebf17bdec9c72da9c1c711d653608d3ece1'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
