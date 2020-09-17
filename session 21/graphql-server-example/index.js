const { ApolloServer, gql } = require('apollo-server');

let students = [
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
  Mutation: {
    addStudent: (_, { input })=> {
      console.log(input);
      students.push(
        {
          name: input.name,
          email: input.age,
          age: input.age,
          id: input.id
        }
      )
      
      return {
        name: input.name,
        email: input.age,
        age: input.age,
        id: input.id
      }
    }
  }
};
const typeDefs = gql`
    type Students {
        id: Int
        name: String
        email: String
        age: Int
  }

    input StdInput {
        id: Int
        name: String
        email: String
        age: Int  
  }

  type Query {
    students: [Students]
  }
  type Mutation {
    addStudent(input: StdInput): Students
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});