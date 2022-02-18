import React from 'react'

export default function Book(props) {
  return (
    <div>
        <h1 onClick={props.onDelete}>BookName:{props.name}</h1>
        <h2>Book Author:{props.author}</h2>
    </div>
  )
}
