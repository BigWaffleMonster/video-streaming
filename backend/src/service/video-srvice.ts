import fs from 'fs'
import busboy from 'busboy'
import { Request, Response } from 'express'
import path from 'path'

class VideoService {
  async upload(req: Request) {
    console.log('POST request')
    const bb = busboy({ headers: req.headers })
    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info
      const saveTo = path.join(`assets`, filename)
      file.pipe(fs.createWriteStream(saveTo))
      file.on('data', (data) => { }).on('close', () => { })
    })
    bb.on('field', (name, val, info) => { })
    bb.on('close', () => { })

    req.pipe(bb)
    try {
    } catch (e) { }
  }

  async play(req: Request, res: Response) {
    try {
      const path = `assets/${req.query.title}`
      const stat = fs.statSync(path)
      const fileSize = stat.size
      const range = req.headers.range
      if (range) {
        console.log(range, 'range')
        const parts = range.replace(/bytes=/, '').split('-')
        console.log('parts', parts)
        const start = parseInt(parts[0], 10)
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
        const chunksize = end - start + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
        }
        res.writeHead(206, head)
        file.pipe(res)
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4'
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async getPlayerSettings() {
    try {
    } catch (e) { }
  }
}

export default new VideoService()
