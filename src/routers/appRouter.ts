import { Router } from 'express'
import { createShortUrl, getLongUrl } from '../controllers/appController'

const router = Router()

router.route('/').put(createShortUrl)
router.route('/:short_url').get(getLongUrl)

export = router
