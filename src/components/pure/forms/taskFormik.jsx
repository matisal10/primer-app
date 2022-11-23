import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TaskFormik = ({ add, length }) => {

    const nameRef = useRef('')
    const desciptionRef = useRef('')
    const levelRef = useRef(Levels.NORMAL)

    function addTask(e) {
        const newTask = new Task(
            e.name,
            e.description,
            false,
            levelRef.current.value
        );
        add(newTask)
    }

    const initialValues = {
        name: '',
        description: '',
        Levels: Levels.NORMAL
    }

    const taskShema = Yup.object().shape({
        name: Yup.string()
            .min(6, 'name too short')
            .required('name is required'),
        description: Yup.string()
            .min(6, 'description too short')
            .required('description is required'),
        Levels: Yup.string()
            .oneOf([Levels.NORMAL, Levels.BLOCKING, Levels.URGENTE], 'you must select a level: NORMAL / URGENTE / BLOCKING ')
            .required('levels is required'),
    })



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskShema}
            onSubmit={async (values) => {
                console.log(values)
                addTask(values)
            }}>
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                <Form>
                    <Field
                        className='form-control form-control-lg mt-4'
                        ref={nameRef}
                        id="name"
                        name="name"
                        placeholder="Task name"
                        type="name"
                    />

                    {
                        errors.name && touched.name &&
                        (
                            <ErrorMessage name='name' component='div'></ErrorMessage>
                        )
                    }

                    <Field
                        className='form-control form-control-lg mt-4'
                        ref={desciptionRef}
                        id="description"
                        name="description"
                        placeholder="Task description"
                        type="description"
                    />

                    {
                        errors.description && touched.description &&
                        (
                            <ErrorMessage name='description' component='div'></ErrorMessage>
                        )
                    }

                    <select ref={levelRef} defaultValue={Levels.NORMAL} id='selectLevel' className='mt-4 form-control form-control-lg mt-4' >
                        <option value={Levels.NORMAL}>
                            NORMAL
                        </option>
                        <option value={Levels.URGENTE}>
                            URGENTE
                        </option>
                        <option value={Levels.BLOCKING}>
                            BLOCKING
                        </option>
                    </select>

                    <button type='submit' className='btn btn-success btn-lg ms-1 mt-2' style={{ marginRight: '5px', height: 'fit-content' }}>
                        {length > 0 ? 'add Task' : 'Create your first task'}
                    </button>
                </Form>
            )

            }
        </Formik>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskFormik;
