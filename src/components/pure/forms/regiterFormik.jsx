import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import { User } from '../../models/user.class';
import { ROLES } from '../../models/role.enum';

const RegiterFormik = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerShema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'username too short')
            .max(12, 'username too long')
            .required('username is required'),
        email: Yup.string()
            .email('invalid email format')
            .required('email is required'),
        password: Yup.string()
            .required('password is required')
            .min(8, "password to short")
            .matches(``),
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], 'you must select a role: user / admin')
            .required('role is required'),
        confirm: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'password must match!'
                )
            }).required('you must confirm the password')

    })

    const submit = (values) => {
        console.log('register user')
    }


    return (
        <div>
            <h4>Regiter Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerShema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>

                        <label htmlFor="username">Email</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="Your username"
                            type="username"
                        />

                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />

                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password" />

                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field id="confirm" name="confirm" placeholder="confirm password" type="password" />

                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">register user</button>
                        {isSubmitting ? (<p>sending your credentials...</p>) : null}
                    </Form>
                )

                }
            </Formik>
        </div>
    );
}

export default RegiterFormik;
