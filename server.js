const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: spaceSchema,
    graphql: true
  })
);

const PORT = process.env.PORT || 6666;

app.listen(PORT, () => console.log(`Server be runnin on port ${PORT}`));
