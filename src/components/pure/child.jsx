import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function submitForm(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    function pressBtn() {
        const text = messageRef.current.value
        alert(`text input: ${text}`)
    }

    function pressBtnParams(txt) {
        alert(`Text: ${txt}`)
    }

    return (
        <div style={{background: 'blue', padding:'30px'}}>
            <p onMouseOver={() => console.log("mouse over")}>Hello {name}</p>
            <button onClick={() => console.log("algo")}>btn1</button>
            <button onClick={pressBtn}>btn2</button>
            <button onClick={() => pressBtnParams('hello')}>btn3</button>
            <input placeholder='send a text ' onFocus={() => console.log('focus')}
                onChange={(e) => console.log('change:', e.target.value)}
                onCopy={() => console.log('copy')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>send message</button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitForm}>
                    <input ref={nameRef} placeholder='new name'/>
                    <button type='submit'>update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
