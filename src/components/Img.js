import React from 'react'

export default function Img(props) {
  return (
    <div>
      <img className='divimg' src={props.imgurl} alt="image" />
    </div>
  )
}