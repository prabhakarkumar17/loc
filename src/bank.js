import React from 'react';
import './login.css'
//import App from './App';
import Profile from './profile';
//import { register } from './serviceWorker';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai'; 
import { BrowserRouter, Link } from 'react-router-dom';


class bankLogin extends React.Component{

    render(){
        return(

            <div className="col-md-4 bankLoginPage" >
                <p className="heading">Bank Login Section !</p>

                <form onSubmit = {this.changeToUserProfile} className="bankForm">
                    <div className="form-group">
                        <FaUserAlt color="black" size="28px" className="userIcon"/>
                        <input type="text" name="text" placeholder="Bank Id" className="form-control" id="exampleInputBankId" aria-describedby="bankHelp" />
                        <small id="bankHelp" className="form-text">Don't Worry. Your confidentiality is our asset.</small>
                    </div>
                    <div className="form-group">
                        <AiFillLock color="black" size="28px" className="userIcon" />
                        <input type="password" placeholder="Password" className="form-control" id="exampleInputBankPassword1" />
                    </div>

                    <p className="forgotPassword">Forgot Your Password ?</p>
                    <button type="submit" className="btn btn-primary submitBtn"><Link to="/BankLogin/bankProfile">Sign in</Link></button>

                    <p className="signUp" > <Link to="/BankRegister">New here ? <span style={{text_decoration:"underline"}}> Sign Up instead </span></Link> </p>
                </form>
                <hr className="divider"></hr>
                
                

            </div>
        )};
     }

export default bankLogin;