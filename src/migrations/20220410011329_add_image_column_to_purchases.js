/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('purchases', table => {
        table.string('image',1000).notNullable()
        table.dropColumn('product_image')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('purchases', table => {
        table.dropColumn('image')
        table.string('product_image',1000).notNullable()
    })
};
