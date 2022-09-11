import { config } from 'dotenv'
import { createClient } from 'redis'

config()
const REDIS_URL = process.env.REDIS_URL

const redisClient = createClient({
  url: REDIS_URL
})

export = redisClient
