/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('products', table => {
        table.string('image1', 1000).notNullable()
        table.string('image2', 1000)
        table.string('image3', 1000)
        table.string('image4', 1000)
        table.string('image5', 1000)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('products', table => {
        table.dropColumn('image1')
        table.dropColumn('image2')
        table.dropColumn('image3')
        table.dropColumn('image4')
        table.dropColumn('image5')
    })
};
