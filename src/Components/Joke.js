import React from 'react'

export const Joke = ({joke}) => {
  return (
    <p className="joke">{joke.value}</p>
  )
}
