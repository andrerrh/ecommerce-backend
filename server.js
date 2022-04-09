const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./src/api/schema')

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(process.env.PORT || 4000, () => console.log("Running server"))