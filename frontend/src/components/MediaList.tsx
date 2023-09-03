import React, { FC } from 'react'
import { mediaListType } from '../types/types'

const MediaList: FC<{ data: mediaListType[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((el) => (
        <li>{el.title}</li>
      ))}
    </ul>
  )
}

export default MediaList
