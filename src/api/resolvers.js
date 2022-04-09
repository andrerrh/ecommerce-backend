const db = require('../config/database')
const bcrypt = require('bcrypt')

module.exports = {
    Cart: {
        async product(parent) {
            return await db('products')
                .where({ id: parent.id_product })
                .first()
        }
    },
    Product: {
        async brands(parent) {
            return await db('brands')
                .where({ id: parent.id_brands })
                .first()
        },

        async categories(parent) {
            return await db('categories')
                .where({ id: parent.id_categories })
                .first()
        }
    },

    Query: {
        async user(_, { id }) {
            return await db('users')
                .where({ id })
                .first()
        },

        async users() {
            return await db('users')
        },

        async brand(_, { id }) {
            return await db('brands')
                .where({ id })
                .first()
        },

        async brands() {
            return await db('brands')
        },

        async category(_, { id }) {
            return await db('categories')
                .where({ id })
                .first()
        },

        async categories() {
            return await db('categories')
        },

        async cart(_, { id }) {
            return await db('cart')
                .where({ 'cart.id_user': id })
        },

        async product(_, { id }) {
            return await db('products')
                .where({ 'products.id': id })
                .first()
        },

        async products() {
            return await db('products')
        },

        async purchases(_ ,{ id }) {
            return await db('purchases')
                .where({ id_user: id })
        }
    },

    Mutation: {
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: bcrypt.hashSync(input.password, 10)
            })
            const id = result[0]
            return await db('users').where({ id }).first()
        },

        async loginUser(_, { input }) {
            let user = await db('users')
                .where({ email: input.email })
                .first()

            const valid = bcrypt.compareSync(input.password, user.password)
            delete user.password

            if (valid) {
                user.token = 'token123'
                return user
            } else {
                return user
            }
        },

        async createProduct(_, { input }) {
            const result = await db('products').insert({
                name: input.name,
                price: input.price,
                positive_rating: input.positive_rating || 0,
                total_rating: input.total_rating || 0,
                description: input.description,
                id_brands: input.id_brands,
                id_categories: input.id_categories,
                image1: input.image1,
                image2: input.image2,
                image3: input.image3,
                image4: input.image4,
                image5: input.image5
            })
            const id = result[0]
            return await db('products')
                .where({ id })
                .first()
        },

        async createBrand(_, { input }) {
            const result = await db('brands').insert({
                name: input.name
            })
            const id = result[0]
            return await db('brands')
                .where({ id })
                .first()
        },

        async createCategory(_, { input }) {
            const result = await db('categories').insert({
                name: input.name
            })
            const id = result[0]
            return await db('categories')
                .where({ id })
                .first()
        },

        async updateCart(_, { input }) {
            const result = await db('cart').insert({
                id_user: input.id_user,
                id_product: input.id_product,
            })
            const id = result[0]
            return await db('cart')
                .where({ id })
                .first()
        },

        async updatePurchases(_, { input }) {
            const result = await db('purchases').insert({
                id_user: input.id_user,
                id_product: input.id_product,
                product_name: input.product_name,
                purchase_date: input.purchase_date,
                quantity: input.quantity,
                price_payed: input.price_payed,
                image: input.image
            })
            const id = result[0]
            return await db('purchases')
                .where({ id })
                .first()
        },

        async deleteCart(_, { id }) {
            return await db('cart').delete()
                .where({ id })
        },

        async deleteAllCart(_, { id }) {
            return await db('cart').delete()
                .where({ id_user: id })
        },

        async updateUser(_, { id, input }) {
            await db('users').update({
                name: input.name,
                email: input.email,
                ...(input.avatar && { avatar: input.avatar })
            })
                .where({ id })

            return await db('users')
                .where({ id })
                .first()
        },

        async updateUserPassword(_, { id, input }) {
            let user = await db('users')
                .where({ id })
                .first()

            const valid = bcrypt.compareSync(input.oldPassword, user.password)
            if (valid) {
                await db('users').update({
                    password: bcrypt.hashSync(input.newPassword, 10)
                })
                    .where({ id })
                return await db('users')
                    .where({ id })
                    .first()
            }

            return "error"
        },

        async updateProduct(_, { id, input }) {
            await db('products').update({
                name: input.name,
                price: input.price,
                positive_rating: input.positive_rating || 0,
                total_rating: input.total_rating || 0,
                description: input.description,
                id_brands: input.id_brands,
                id_categories: input.id_categories,
                image1: input.image1,
                image2: input.image2,
                image3: input.image3,
                image4: input.image4,
                image5: input.image5
            }).where({ id })

            return await db('products')
                .where({ id })
                .first()
        },

        async deleteProduct(_, { id }) {
            await db('products')
                .delete()
                .where({ id })

            return await db('products')
                .where({ id })
                .first()
        }
    }
}