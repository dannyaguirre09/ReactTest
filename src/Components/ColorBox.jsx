import React from 'react'
import './ColorBox.css'

const ColorBox = (props) => {
  return (
    <div
    onClick={() => props.colorHandler(props.colorName)}
    style={{backgroundColor: props.colorName}}
    className='colorName'
    >
      
    </div>
  )
}

export default ColorBox
