const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

knex.raw('CREATE DATABASE [IF NOT EXISTS] ecommerce')

// knex('users').insert({
//     name: 'teste',
//     email: 'teste@teste.com',
//     password: 'teste'
// }).then(res => console.log(res))

// knex('users').then(res => console.log(res))