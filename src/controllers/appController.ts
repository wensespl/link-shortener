import { Request, Response } from 'express'

import Link from '../models/Link'
import redisClient from '../redisClient'

export const createShortUrl = async (req: Request, res: Response) => {
  const { long_url, short_url } = req.body
  let link = await Link.findOne({ short: short_url })

  if (link) throw new Error('Short URL allready in use')

  link = new Link({ long: long_url, short: short_url })
  await link.save()

  return res.status(201).json(link)
}

export const getLongUrl = async (req: Request, res: Response) => {
  const { short_url } = req.params

  let data = await redisClient.get(`link:${short_url}`)
  let link

  if (!data) {
    link = await Link.findOne({ short: short_url })

    if (!link) throw new Error('URL not found')

    await redisClient.set(`link:${short_url}`, JSON.stringify(link))

    console.log('Not cache')
  } else {
    link = JSON.parse(data)
    console.log('cache')
  }
  res.redirect(302, link.long)
}
