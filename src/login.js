import React from 'react';
import './login.css'
//import App from './App';
import Profile from './profile';
//import { register } from './serviceWorker';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai'; 
import { Link } from 'react-router-dom';


const responseGoogle = (response) => {
    console.log(response);
}

const responseFacebook = (response) => {
    console.log(response);
}



class login extends React.Component{

    constructor(props){
        super(props);

        this.state={
            email: "",
            password: ""
        }
    }

    changeToUserProfile = ((event) => {

        event.preventDefault();
        console.log(JSON.stringify(this.state))

        if(this.state.email === "abc@gmail.com"){
             console.log("Correct Email")
        // this.props.data.updateProfile(!this.props.data.profileStatus)}
         }
        else{
           console.log("bhai email galat hai");
        }
        
    })

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name] : event.target.value })
    }

    render(){
        return(

            <div className="col-md-4 loginPage" >
                <p className="heading">Hello there, Welcome back</p>

                <form onSubmit = {this.changeToUserProfile} className="loginForm">
                    <div className="form-group">
                        <FaUserAlt color="black" size="28px" className="userIcon"/>
                        <input type="email" name="email" placeholder="Email address" value={this.state.email} onChange={this.handleChange}
                               className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text">Don't Worry. Your confidentiality is our asset.</small>
                    </div>
                    <div className="form-group">
                        <AiFillLock color="black" size="28px" className="userIcon" />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}
                               className="form-control" id="exampleInputPassword1" />
                    </div>

                    <p className="forgotPassword">Forgot Your Password ?</p>
                    <button type="submit" className="btn btn-primary submitBtn"><Link to="/userProfile">Sign in</Link></button>
                    <p className="signUp" > <Link to="/register">New here ? <span style={{text_decoration:"underline"}}> Sign Up instead </span></Link> </p>
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
     }

export default login;