import { Router } from 'express'
import videoController from './controller/video-controller'

const router = Router()

router.post('/upload', videoController.upload)

router.get('/play', videoController.play)

// route with query params to send setting like range and etc
router.get('/getPlayerSettings', videoController.getPlayerSettings)

export default router
