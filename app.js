const express = require('express');
const connectDB = require('./config/db');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello World!',
    }
};

const app = express();

let apolloServer = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

connectDB();

const port = process.env.PORT || 8080;

app.listen({ port }, () => 
    console.log(`Server running on port: ${apolloServer.graphqlPath}`)
);