import React from 'react';
import './login.css'
//import App from './App';
import Profile from './profile';
//import { register } from './serviceWorker';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai'; 
import { BrowserRouter, Link } from 'react-router-dom';
import web3 from './web3';
import loginContract from './loginContract';
import { browserHistory } from 'react-router'
import { MyContext } from './MyContext'

class bankLogin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            bankId: "",
            password: "",
            bankName: "",
            status: ""
        }
    }

    onSubmit = async(event) => {
        event.preventDefault();
        const account = await web3.eth.getAccounts();

        const bankLoginStatus = await loginContract.methods.bankValidate( this.state.bankId,this.state.password )
                    .send({from: account[0]});
        console.log(bankLoginStatus);

        var key = bankLoginStatus.events.checkBankLogin.returnValues;
        this.setState({bankName: key[1]});
        this.setState({status: key[0]})
        
        document.getElementById("contextUpdate").click();

        if(this.state.status == 0){
            browserHistory.push("http://localhost:3000/BankLogin/bankDashboard");
            window.location.reload();
        } else {
            alert("Please enter Correct id and password")
        }       
        
    }

    handleIdChange = (event) => {
        event.preventDefault();
        this.setState({ bankId: event.target.value })

    }

    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value })
    }

    render(){
        return(

            <div className="col-md-4 bankLoginPage" >
                <p className="heading">Bank Login Section !</p>

                <MyContext.Consumer>
                    {context => (
                        <div>
                            <button id="contextUpdate" onClick={(e) => {context.setBankName(this.state.bankName)}}></button>
                        </div>
                    )}
                </MyContext.Consumer>

                <form onSubmit = {this.onSubmit} className="bankForm">
                    <div className="form-group">
                        <FaUserAlt color="black" size="28px" className="userIcon"/>
                        <input type="text" name="text" placeholder="Bank Id" className="form-control"
                        value={this.state.value} onChange={this.handleIdChange} id="exampleInputBankId" aria-describedby="bankHelp" />
                        <small id="bankHelp" className="form-text">Don't Worry. Your confidentiality is our asset.</small>
                    </div>
                    <div className="form-group">
                        <AiFillLock color="black" size="28px" className="userIcon" />
                        <input type="password" placeholder="Password" className="form-control"
                        value={this.state.value} onChange={this.handlePasswordChange} id="exampleInputBankPassword1" />
                    </div>

                    <p className="forgotPassword">Forgot Your Password ?</p>
                    <button type="submit" className="btn btn-primary submitBtn">Sign In</button>

                    <p className="signUp" > <Link to="/BankRegister">New here ? <span style={{text_decoration:"underline"}}> Sign Up instead </span></Link> </p>
                </form>
                <hr className="divider"></hr>
                
                

            </div>
        )};
     }

export default bankLogin;



//<Link to="/BankLogin/bankProfile">Sign in</Link>