import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(29);

    const birthday = () =>{
        setage(age +1)
    }

    return (
        <div>
            <h1>
                Hola {props.name} desde component f
            </h1>
            <h2>
                edad: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Aumentar 1
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
