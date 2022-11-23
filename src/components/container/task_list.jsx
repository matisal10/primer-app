import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import { Levels } from '../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../style/task.scss'
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';


const TaskList = () => {

    const defaultTask1 = new Task('Example1', 'Default Description1', false, Levels.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default Description2', true, Levels.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Default Description3', false, Levels.URGENTE);

    const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(false)
        return () => {
            
        };
    }, [task]);

    function completeTask(tasks) {
        console.log("complete this task:", tasks);
        const index = task.indexOf(tasks)
        const tempTask = [...task];
        tempTask[index].completed = !tempTask[index].completed
        setTask(tempTask);
    }

    function deleteTask(tasks) {
        console.log("delete this task:", tasks);
        const index = task.indexOf(tasks)
        const tempTask = [...task];
        tempTask.splice(index, 1);
        setTask(tempTask);
    }

    function addTask(tasks) {
        console.log("complete thos task:", tasks);
        const index = task.indexOf(tasks)
        const tempTask = [...task];
        tempTask.push(tasks)
        setTask(tempTask)
    }
    
    const loadingStyle ={
        color:'grey',
        fontSize:'20px',
        fontWeight: 'bold'
    }

    const Table = () => {

        

        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {task.map((task, index) => {
                        return (
                            <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask} ></TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable 

    if ((task.length > 0)) {
        tasksTable = <Table></Table>
    }
    else{
        tasksTable = (<div>
            <h3>there are no task to show</h3>
            <h4>please, create one</h4>
        </div>)
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5 style={{ color: 'blue' }}>
                            your task:
                        </h5>
                    </div>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                    {loading ? (<p style={loadingStyle}>loading task...</p>) : tasksTable}
                    {/* <TaskForm add={addTask} length={task.length}></TaskForm> */}
                    <TaskFormik add={addTask} length={task.length}></TaskFormik>
                </div>
            </div>
            {/* <TaskComponent task={defaultTask} ></TaskComponent> */}
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;
