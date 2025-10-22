import React from 'react'
import "./Button.css"
const Button = ({fetchApi}) => {
  return (
    <button onClick={fetchApi} className='btn'>Click for Joke</button>
  )
}

export default Button