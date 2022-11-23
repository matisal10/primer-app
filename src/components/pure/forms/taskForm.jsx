import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('')
    const desciptionRef = useRef('')
    const levelRef = useRef(Levels.NORMAL)

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            desciptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask)
    }

    const normalStyle ={
        color:'blue',
        fontWright:'bold'
    }

    const urgentStyle ={
        color:'yellow',
        fontWright:'bold'
    }

    const blokingStyle ={
        color:'tomato',
        fontWright:'bold'
    }

    return (
        <form onSubmit={addTask} className={'d-flex justify-content-center aling-items-center mb-4 mt-4'}>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} placeholder='nombre' id='inputName' type='text' className='form-control form-control-lg mt-4' required autoFocus />
                <input ref={desciptionRef} placeholder='descripcion' id='inputDesciption' type='text' className='form-control form-control-lg mt-4' required />
                <select ref={levelRef} defaultValue={Levels.NORMAL} id='selectLevel' className='mt-4 form-control form-control-lg mt-4' >
                    <option style={normalStyle} value={Levels.NORMAL}>
                        NORMAL
                    </option>
                    <option style={urgentStyle} value={Levels.URGENTE}>
                        URGENTE
                    </option>
                    <option style={blokingStyle} value={Levels.BLOCKING}>
                        BLOCKING
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-1' style={{ marginRight: '5px', height: 'fit-content' }}>
                    {length > 0 ? 'add Task' : 'Create your first task'}
                </button>
            </div>

        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
