/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cart', table => {
        table.increments('id').primary()
        table.integer('id_user').unsigned().notNullable()
        table.integer('id_product').unsigned().notNullable()
        table.foreign('id_user').references('id').inTable('users')
        table.foreign('id_product').references('id').inTable('products')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cart')
};
