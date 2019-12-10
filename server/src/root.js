import express from 'express';
import ApolloServer from 'apollo-server-express';
import path from 'path';
import typeDefs from './schema.js';
import resolvers from './resolver.js';

const app = express();

const port = 4000;

const server = new ApolloServer.ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app, path: '/api', port });

const buildFolder = path.resolve('dist');

app.use(express.static(buildFolder));

app.get('*', (req, res) => {
    res.type('html');
    res.sendFile(`${buildFolder}/index.html`);
});

app.listen(port, () =>
    console.log(
        `Graphql user backend listening at: localhost:${port}${server.graphqlPath}`
    )
);
