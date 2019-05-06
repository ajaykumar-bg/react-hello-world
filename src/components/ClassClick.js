import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick() {
        console.log("Class Clicked");
    }
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick
