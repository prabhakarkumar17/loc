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
import web3 from "./web3";
import loginContract from './loginContract'
import { browserHistory } from 'react-router'
import ProfileNavBar from './profileNavBar'
import { MyContext } from './MyContext'

const responseGoogle = (response) => {
    console.log(response);
}

const responseFacebook = (response) => {
    console.log(response);
}



class login extends React.Component{

    constructor(props){
        super(props);
        this.changeToUserProfile = this.changeToUserProfile .bind(this);

        this.state={
            email: "",
            password: "",
            check: "",
            name: "Prabhakar",
            message: ""
        }
    }

    changeToUserProfile = (async (event) => {

        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        console.log(this.state.email, this.state.password);        

        const loginResult = await loginContract.methods.userValidate(this.state.email, this.state.password)
                            .send({from: accounts[0]});
        
        //var loginEvent = await loginContract.events.checkLogin;
        var key = loginResult.events.checkLogin.returnValues;
        
        this.setState({name: key[1]});
        this.setState({check: key[0]});

        if(this.state.check == 0){
            console.log("Welcome "+this.state.name);
            browserHistory.push("http://localhost:3000/userProfile");
            window.location.reload();
        } else {
            this.setState({message: "Please check your UserId and Password"})
        }      
    })

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name] : event.target.value })
    }
    render(){
        return(

            <div className="col-md-4 loginPage" >
                
                <MyContext.Consumer>
                    {(context) => (
                            () => context.setUserName(this.state.name)
                        
                        
                    )}
                </MyContext.Consumer>

                <p className="heading">Hello there, Welcome back</p>
                <h4>{this.state.message}</h4>
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
                    <button type="submit" className="btn btn-primary submitBtn" onClick={this.changeToUserProfile}>Sign in</button>
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