import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'pepe',
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}
                </h1>
                <h2>
                    edad: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Aumentar 1
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;
