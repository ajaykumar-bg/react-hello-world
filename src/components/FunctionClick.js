import React from 'react'

function FunctionClick() {
    function handleClick() {
        console.log("Function Click");
    }
  return (
    <div>
      <button onClick={handleClick}>Function Click</button>
    </div>
  )
}

export default FunctionClick
