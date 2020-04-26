import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <main>
            <div className="bg_color_2">
                <div className="container margin_60_35">
                    <div id="login">
                        <h1>Login!</h1>
                        <div className="box_form">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your email address"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your password" name="password" id="password"/>
                                </div>
                                <a href="#0"><small>Forgot password?</small></a>
                                <div className="form-group text-center add_top_20">
                                    <input className="btn_1 medium" type="submit" value="Login"/>
                                </div>
                            </form>
                        </div>
                        <p className="text-center link_bright">Do not have an account yet? <Link to="/register"><strong>Register now!</strong></Link></p>
                    </div>
                </div>
            </div>
        </main>
     )
}

export default Login;