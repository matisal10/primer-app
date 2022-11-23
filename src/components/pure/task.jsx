import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class'
import '../../style/task.scss'
import { Levels } from '../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Tarea creada")
        return () => {
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case Levels.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>
                )
            case Levels.URGENTE:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>
                )

            case Levels.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>
                )
            default:
                break;
        }
    }

    function taskIconCompleted() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className="bi bi-toggle-on task-action" style={{ color: 'green ', width: '100px' }}></i>)
        }
        else {
            return (<i onClick={() => complete(task)} className="bi bi-toggle-off task-action" style={{ color: 'grey', width: '100px' }}></i>)
        }
    }


    return (

        <tr className={task.completed ? 'task-completed' : 'task-pendindg'}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{ color: 'tomato', marginLeft: '10px' }}></i>
            </td>

        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
