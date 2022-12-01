import { Form, Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'


const loginShema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
})

const LoginFormik = () => {

    const iniCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    const register =()=>{
        navigate('/register')
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={iniCredentials}
                validationSchema={loginShema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                    navigate('/profile')
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>

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

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )

                }
                
            </Formik>
            <div style={{marginTop: '10px'}}>
                <h2>No estas registrado?</h2>
                <button onClick={register}>Registrate</button>
            </div>
            
        </div>
    );
}

export default LoginFormik;
