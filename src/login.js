import React from 'react';
import './login.css'
import Register from './register';
import App from './App';
import { register } from './serviceWorker';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai'; 


const responseGoogle = (response) => {
    console.log(response);
}

const responseFacebook = (response) => {
    console.log(response);
}

function login (props){
        return(

            <div className="col-md-4 loginPage" >
                <h1> { props.data.registerStatus } </h1>
                <p className="heading">Hello there, Welcome back</p>
                <form>
                    <div className="form-group">
                        <FaUserAlt color="black" size="28px" className="userIcon"/>
                        <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text">Don't Worry. Your confidentiality is our asset.</small>
                    </div>
                    <div className="form-group">
                        <AiFillLock color="black" size="28px" className="userIcon" />
                        <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <p className="forgotPassword">Forgot Your Password ?</p>
                    <button type="submit" className="btn btn-primary submitBtn">Sign in</button>

                    <p className="signUp" onClick={() => props.data.updateStatus(!props.data.registerStatus)} >New here ? <span style={{text_decoration:"underline"}}> Sign Up instead </span> </p>
                </form>
                <hr className="divider"></hr>
                
                <GoogleLogin 
                    className="google"
                    style={{width: '235px'
                            }}
                    clientId = "1050518653213-i3dp7cafpmeh3d7fkg0qgulkok6ekhau.apps.googleusercontent.com"
                    buttonText = "Login with Google"
                    onSuccess = {() => responseGoogle}
                    cookiePolicy = "single_host_origin"
                />

                <div className="facebook" >
                    <FacebookLogin
                        buttonStyle={{fontSize: '13px',
                                      width: '235px',
                                      height: '48px',
                                      textAlign: 'center',
                                      borderRadius: '25px',
                                      backgroundColor: 'black'}}
                        appId="383699362602208"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook} 
                    />
                </div>

            </div>
        )};


export default login;