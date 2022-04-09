const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const User = `
id: Int
name: String
email: String
password: String
avatar: String
`

const Product = `
id: Int
name: String!
price: Float!
positive_rating: Int
total_rating: Int
description: String
id_brands: Int!
id_categories: Int!
image1: String
image2: String
image3: String
image4: String
image5: String
`

const typeDefs = `
    type Brands {
        id: Int
        name: String
    }

    type Cart {
        id: Int
        id_user: Int
        id_product: Int
        product: Product
    }

    type Categories {
        id: Int
        name: String!
    }

    type User {
        ${User}
        token: String
    }

    type Product {
        ${Product}
        brands: Brands
        categories: Categories
    }

    type Purchases {
        id: Int
        id_user: Int
        id_product: Int
        purchase_date: String
        quantity: Int
        price_payed: Float
        product_name: String
        image: String
    }

    type Query {
        user(id: ID!): User
        users: [User]
        brand(id: ID!): Brands
        brands: [Brands]
        cart(id: ID!): [Cart]
        category(id: ID!): Categories
        categories: [Categories]
        product(id: ID!): Product
        products: [Product]
        purchases(id: ID!): [Purchases]
    }

    input UserInput {
        ${User}
    }

    input ProductInput {
        ${Product}
        brands: Int
        categories: Int
    }

    input BrandsInput {
        name: String
    }

    input CategoriesInput {
        name: String!
    }

    input CartInput {
        id_user: Int!
        id_product: Int!
    }

    input userPasswordUpdateInput {
        oldPassword: String!
        newPassword: String!
    }

    input PurchasesInput {
        id_user: Int!
        id_product: Int!
        purchase_date: String!
        quantity: Int!
        price_payed: Float!
        product_name: String!
        image: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        createProduct(input: ProductInput): Product
        createBrand(input: BrandsInput): Brands
        createCategory(input: CategoriesInput): Categories
        deleteCart(id: ID!): Cart
        deleteAllCart(id: ID!): Cart
        deleteProduct(id: ID!): Product
        loginUser(input: UserInput): User
        updateCart(input: CartInput): Cart
        updatePurchases(input: PurchasesInput): Purchases
        updateUser(id: ID!, input: UserInput): User
        updateUserPassword(id: ID!, input: userPasswordUpdateInput): User
        updateProduct(id: ID!, input: ProductInput ): Product
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})