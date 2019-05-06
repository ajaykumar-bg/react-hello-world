import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h3>Welcome {this.props.name}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default Welcome;