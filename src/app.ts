import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'

import errorHandler from './middlewares/errorHandler'

import appRouter from './routers/appRouter'

const app = express()

app.use(express.static('client/build'))

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/link', appRouter)
app.use(errorHandler)

export = app
