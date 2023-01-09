import React, {useState} from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumber = () =>{

        console.log("subs to observable")
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New value: ', newNumber)
                    setNumber(newNumber)
                },
                error(error){
                    alert(`error: ${error}`)
                },
                complete(){
                    alert(`finish: ${number}`)
                }
            }
        )
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumber}>obtain number</button>
        </div>
    );
}

export default ObservableExample;
