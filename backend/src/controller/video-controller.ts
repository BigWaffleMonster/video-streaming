import { NextFunction, Request, Response } from 'express'

class VideoController {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      res.status(400).json({ error: '' })
    }
  }

  async play(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      res.status(400).json({ error: '' })
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
