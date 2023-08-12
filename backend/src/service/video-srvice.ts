import fs from 'fs'
import busboy from 'busboy'
import { Request } from 'express'
import path from 'path'

class VideoService {
  async upload(req: Request) {
    console.log('POST request')
    const bb = busboy({ headers: req.headers })
    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info
      const saveTo = path.join(`busboy-upload-1`, filename)
      file.pipe(fs.createWriteStream(saveTo))
      file.on('data', (data) => { }).on('close', () => { })
    })
    bb.on('field', (name, val, info) => { })
    bb.on('close', () => { })

    req.pipe(bb)
    try {
    } catch (e) { }
  }

  async play() {
    try {
    } catch (e) { }
  }

  async getPlayerSettings() {
    try {
    } catch (e) { }
  }
}

export default new VideoService()
