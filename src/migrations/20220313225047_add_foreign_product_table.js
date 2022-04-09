/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('products', table => {
        table.integer('id_brands').unsigned().notNullable()
        table.integer('id_categories').unsigned().notNullable()
        table.foreign('id_brands').references('id').inTable('brands')
        table.foreign('id_categories').references('id').inTable('categories')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('products', table => {
        table.dropColumn('id_brands')
        table.dropColumn('id_categories')
    })
};
