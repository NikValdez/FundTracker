import { ApolloServer } from 'apollo-server-express'
const { Mutation } = require('./resolvers/Mutation')
import { Query } from './resolvers/Query'
import path from 'path'
import { importSchema } from 'graphql-import'
import { prisma } from './generated/prisma-client'

const typeDefs = importSchema(path.resolve('schema.graphql'))

function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers: {
      Mutation,
      Query
    },

    context: req => ({ ...req, prisma })
  })
}

export default createServer
