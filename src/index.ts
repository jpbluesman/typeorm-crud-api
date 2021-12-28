import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'
import userRoutes from './routes/user.routes'

const app = express()
createConnection()

// middleawares
app.use( cors() )
app.use( morgan('dev') )
app.use( express.json() )

// routes
app.use( userRoutes )

const port = 3000
app.listen(port)
console.log('Server on port ', port)