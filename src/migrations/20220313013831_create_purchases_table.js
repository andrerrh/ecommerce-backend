/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('purchases', table => {
        table.increments('id').primary()
        table.integer('id_user').unsigned().notNullable().references('id').inTable('users')
        table.integer('id_product').unsigned().notNullable().references('id').inTable('products')
        table.string('purchase_date').notNullable()
        table.integer('quantity').notNullable()
        table.float('price_payed').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('purchases')
};