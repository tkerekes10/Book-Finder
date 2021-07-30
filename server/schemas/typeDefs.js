const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    auth: Auth
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, password: String!, email: String!): Auth

    saveBook(
      authors: [String]
      description: String
      title: String
      bookId: String
      image: String
      link: String
      userId: String
    ): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
