import React from 'react'
import './myStyles.css'

function StyleSheets(props) {
    let className = props.color ? 'primary' : ''
  return (
    <div>
      <h2 className={`${className} font-xl`}>StyleSheets</h2>
    </div>
  )
}

export default StyleSheets
