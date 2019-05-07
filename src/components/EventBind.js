import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome'
      }
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: 'Good Bye'
        });
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <div>
                    <h2>{this.state.message}</h2>
                </div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind;
