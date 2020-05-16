import React, { useContext } from 'react';
import {Formik, Field, FormikValues} from 'formik';
import {register} from '../services/auth'
import { AuthContext } from '../Auth';


function Register() {
    const {setTokenAndUser} = useContext(AuthContext);
    const registerUser = async (values: FormikValues) => {
        console.log(values);
        const newUser: RegisterUserRequest = {
            username: values.username,
            email: values.email,
            password: values.password
        };

        try {
            const {data: {token, user}} = await register(newUser);
            setTokenAndUser(token, user);
        } catch (e) {
            throw e;
        }
    }
    return (
	    <main>
            <div className="bg_color_2">
                <div className="container margin_60_35">
                    <div id="register">
                        <h1>Register</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <Formik 
                                    initialValues={{
                                        username: '',
                                        email: '',
                                        password: '',
                                        password_confirmation: '',
                                        agreed_to_terms: '',
                                    }}
                                    onSubmit={registerUser}
                                >
                                    {({submitForm}) => (
                                        <div className="box_form">
                                            {/* <div className="form-group">
                                                <label>Full Name</label>
                                                <Field name="full_name" className="form-control" placeholder="Your name"/>
                                            </div> */}
                                            <div className="form-group">
                                                <label>Email</label>
                                                <Field name="email" className="form-control" placeholder="Your email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <Field type="password" className="form-control" id="password1" name="password" placeholder="Your password"/>
                                            </div>
                                            {/* <div className="form-group">
                                                <label>Confirm password</label>
                                                <Field type="password" className="form-control" id="password2" name="password_confirmation" placeholder="Confirm password"/>
                                            </div> */}
                                            <div id="pass-info" className="clearfix"></div>
                                            {/* <div className="checkbox-holder text-left">
                                                <div className="checkbox_2">
                                                    <input type="checkbox" value="accept_2" id="check_2" name="check_2" checked/>
                                                    <label htmlFor="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                                                </div>
                                            </div> */}
                                            <div className="form-group text-center add_top_30">
                                                <button onClick={submitForm} className="btn_1" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    )}
                                    {/* <p className="text-center"><small>This is placeholder text.</small></p> */}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register;