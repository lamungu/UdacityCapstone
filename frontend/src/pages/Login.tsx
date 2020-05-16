import React, { useContext } from 'react';
import {Formik, Field, FormikValues} from 'formik';
import {login} from '../services/auth'
import { AuthContext } from '../Auth';
import {Link} from 'react-router-dom';

function Login() {
    const {setTokenAndUser} = useContext(AuthContext);
    const loginUser = async (values: FormikValues) => {
        console.log(values);
        const newUser: RegisterUserRequest = {
            username: values.username,
            email: values.email,
            password: values.password
        };

        try {
            const {data: {token, user}} = await login(newUser);
            setTokenAndUser(token, user);
        } catch (e) {
            throw e;
        }
    }
    return (
        <main>
            <div className="bg_color_2">
                <div className="container margin_60_35">
                    <div id="login">
                        <h1>Login!</h1>
                        <Formik 
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            onSubmit={loginUser}
                        >
                            {({submitForm}) => (
                                <div className="box_form">
                                    <div className="form-group">
                                        <Field type="email" className="form-control" name="email" placeholder="Your email address"/>
                                    </div>
                                    <div className="form-group">
                                        <Field name="password" type="password" className="form-control" placeholder="Your password" id="password"/>
                                    </div>
                                    {/* <a href="#0"><small>Forgot password?</small></a> */}
                                    <div className="form-group text-center add_top_20">
                                        <button onClick={submitForm} className="btn_1 medium" type="submit">Login</button>
                                    </div>
                                </div>
                            )}
                        </Formik>
                        <p className="text-center link_bright">Do not have an account yet? <Link to="/register"><strong>Register now!</strong></Link></p>
                    </div>
                </div>
            </div>
        </main>
     )
}

export default Login;