import React, { Component } from 'react';
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
           'name': 'Ajay'
        }
        console.log("LifecycleA constructor");
    }
      
    static getDerivedStateFromProps() {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
      
    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: 'Name changed'
        })
    }

    render() {
        console.log("LifecycleA render");
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />

                Current State = {this.state.name}
            </div>
        );
    }
}

export default LifecycleA;