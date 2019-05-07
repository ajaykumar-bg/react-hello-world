import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         skill: 'react'
      }
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        });
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        });
    }

    handleSkillChange = event => {
        this.setState({
            skill: event.target.value
        });
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>User name</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Skills</label>
                    <select value={this.state.skill} onChange={this.handleSkillChange}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                Entered values = <pre>{JSON.stringify(this.state, null, 2)}</pre>
                
            </form>
        );
    }
}

export default Forms;