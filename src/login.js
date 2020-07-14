import React from 'react';
import loginCss from './login.css'
import App from './App';
import { register } from './serviceWorker';

class login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            registerStatus : 'false'
        };
    }

    registerPage = () => this.setState({registerStatus: 'true'});
    

    render() 
    {
        return(

            <div className="col-md-4  loginPage" >
                <p className="heading">Hello there, Welcome back</p>
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

                    <p className="signUp" onClick={this.registerPage}>New here ? <span style={{text_decoration:"underline"}}> Sign Up instead </span> </p>
                </form>
                <hr className="divider"></hr>
                <App registerStatus={this.state.registerStatus} />
            </div>
        )};
}

export default login;