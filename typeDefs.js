const { gql } = require('apollo-server');


const typeDefs = gql`
type Query {
    allUsers : [User]
    userById(id: Int!): User

  }

type User{
    id : Int
    email : String
    name : String
    role : String
    designation : String
}

input createUserInput {
  email : String
  name : String
  role : String
  designation : String
}

input updateUserInput{
    id : Int
 email : String
  name : String
  role : String
  designation : String
}

input deleteUserInput{
    id : Int
}

type Mutation{
    createUser(input : createUserInput): User!
    updateUser(input : updateUserInput): User!
    deleteUser(input : deleteUserInput): User!
}
`;

module.exports = typeDefs;