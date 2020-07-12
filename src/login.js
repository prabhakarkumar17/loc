import React from 'react';
import loginCss from './login.css'

class login extends React.Component{
    render() 
    {
        return(

            <div className="col-md-4  loginPage" >
                <heading>Hello there, Welcome back</heading>
                <form>
                    <div className="form-group">
                        <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text">Don't Worry. Your confidentiality is our asset.</small>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <p className="forgotPassword" onClick="forgot">Forgot Your Password ?</p>
                    <button type="submit" className="btn btn-primary submitBtn">Sign in</button>
                </form>
                <hr className="divider"></hr>
            </div>
        )};
}

export default login;