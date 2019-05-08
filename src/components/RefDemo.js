import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
      // this.inputRef = React.createRef();
      this.cbRef = null;
      this.setCBRef = element => {
          this.cbRef = element;
      }
    }

    componentDidMount() {
        // console.log(this.inputRef);
        // this.inputRef.current.focus();
        console.log(this.cbRef);
        this.cbRef.focus();
    }

    clickHandler = () => {
        // alert(this.inputRef.current.value);
        alert(this.cbRef.value);
    }
    
  render() {
    return (
      <div>
          <input type="text" placeholder="User name" ref={this.setCBRef}></input>
        {/* <input type="text" placeholder="User name" ref={this.inputRef}></input> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo
