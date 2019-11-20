import 'dotenv/config'
import createServer from './createServer'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import logger from 'morgan'

const server = createServer()
const app = express()
app.use(helmet())
app.use(logger('dev'))

app.use(
  cors({
    origin: true,
    credentials: true
  })
)

server.applyMiddleware({ app, path: '/', cors: false })
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`)
)
