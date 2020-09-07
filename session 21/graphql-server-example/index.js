const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        "id": 1,
        "name": "ali",
        "email": "ali@gmail.com",
        "age": "25"
    },
    {
        "id": 2,
        "name": "aqsa",
        "email": "aqsa@gmail.com",
        "age": "23"
    },
    {
        "id": 3,
        "name": "zk",
        "email": "zk@gmail.com",
        "age": "20"
    }
]

const resolvers = {
    Query: {
        students: () => students,
    },
  };
const typeDefs = gql`
    type Students {
        id: Int
        name: String
        email: String
        age: Int
  }

  type Query {
    students: [Students]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});