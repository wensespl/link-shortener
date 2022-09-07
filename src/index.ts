import { config } from 'dotenv'

import app from './app'
import connectDB from './db'

config()
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL as string

connectDB(MONGO_URL)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
