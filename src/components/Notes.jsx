import React from 'react'

export default function Notes({content, date}) {
  return (
    <li>
        <div>{content}</div>
        <small> {date} </small>
      </li>
  )
}
