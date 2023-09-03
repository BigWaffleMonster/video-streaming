import { useEffect, useState } from 'react'
import axios from 'axios'

import MediaList from '../components/MediaList'
import { mediaListType } from '../types/types'

function Home() {
  const limit = 10

  const [page, setPage] = useState<number>(1)
  const [media, setMedia] = useState<mediaListType[]>([])
  const [fetching, setFetching] = useState<boolean>(false)
  const [totalPageCount, setTotalPageCount] = useState<number>(0)
  const [totalMediaCount, setTotalMediaCount] = useState<number>(0)

  useEffect(() => {
    ;async () => {
      const { data } = await axios.get<{
        media: mediaListType[]
        totalCount: number
      }>('http://localhost:5000/getMedia', {
        params: {
          _limit: limit,
          _page: page
        }
      })

      setPage((prev) => prev + 1)
      setFetching(false)

      setTotalPageCount(Math.ceil(data.totalCount / limit))

      //@ts-ignore
      setMedia((prev) => [...prev, data.media])
    }
  }, [fetching, page])

  return <MediaList data={media} />
}
export default Home
