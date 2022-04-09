/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary()
    table.string('name', 80).notNullable()
    table.integer('price').notNullable()
    table.integer('positive_rating').notNullable()
    table.integer('total_rating').notNullable()
    table.string('description', 1000).notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('products')
};