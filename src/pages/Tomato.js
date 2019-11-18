import React from 'react'

class Tomato extends React.Component {
    render() {
        return(
        <h1>Tomato: {this.props.match.params.name}</h1>
        );
    }
}

export default Tomato