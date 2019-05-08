import React, {Component} from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        render() {
            return <OriginalComponent name="Ajay"/>
        }
    }
    return NewComponent
}

export default UpdatedComponent