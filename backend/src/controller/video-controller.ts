import { NextFunction, Request, Response } from 'express'
import videoSrvice from '../service/video-srvice'

class VideoController {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
      let resp = await videoSrvice.upload(req)

      res.status(200).json({ data: resp })
    } catch (e) {
      res.status(400).json({ error: '' })
    }
  }

  async play(req: Request, res: Response, next: NextFunction) {
    try {
      let resp = await videoSrvice.play(req, res)
    } catch (e) {
      res.status(400).json({ error: e })
    }
  }

  async getPlayerSettings(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      res.status(400).json({ error: '' })
    }
  }
}

export default new VideoController()
