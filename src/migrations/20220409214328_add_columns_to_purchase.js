/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('purchases', table => {
        table.string('product_name',1000).notNullable()
        table.string('product_image',1000).notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('purchases', table => {
        table.dropColumn('product_name')
        table.dropColumn('product_image')
    })
};
