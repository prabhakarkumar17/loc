import React from 'react';
import './login.css';
import { MdEmail, MdContactPhone } from 'react-icons/md';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { AiFillLock } from 'react-icons/ai'; 
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiKey } from 'react-icons/fi';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import web3 from './web3';
import loginContract from './loginContract';

class register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            occupation: "",
            contact: 0,
            password: "",
            confirmPassword: "",
            message: ""
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        var txHash = "";
        
        const accounts = await web3.eth.getAccounts();
        // console.log(this.state.name,
        //     this.state.email,
        //     this.state.occupation,
        //     this.state.contact,
        //     this.state.confirmPassword,
        //     this.state.password);

        const result = await loginContract.methods.setCustomerDetails(this.state.name, this.state.email,
                this.state.occupation, this.state.contact, this.state.password, this.state.confirmPassword)
                .send({
                    from: accounts[0]
                },
                    function(error,transactionHash){
                        txHash = transactionHash;
                        console.log(transactionHash);
                    }
                )
                this.setState({message: "Congratulations!!! you are successfully registered with transaction hash : " + txHash})
                        
                console.log(result);

    }

    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({ name: event.target.value });
    }
    handleEmailChange = (event) => {
        event.preventDefault();
        this.setState({ email: event.target.value });
    }
    handleOccupationChange = (event) => {
        event.preventDefault();
        this.setState({ occupation: event.target.value });
    }
    handleContactChange = (event) => {
        event.preventDefault();
        this.setState({ contact: event.target.value });
    }
    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }
    handleConfirmPasswordChange = (event) => {
        event.preventDefault();
        this.setState({ confirmPassword: event.target.value });
    }



    render(){
        return(
            <div className="col-md-4 registerPage" >
                    <p className="heading">Get on Board</p>
                    <p> {this.state.message} </p>
                    <form onSubmit = {this.onSubmit} className="registerForm">
                        <div className="form-group">
                            <BsFillPersonPlusFill  color="black" size="28px" className="userIcon" />
                            <input type="text" placeholder="Name" className="form-control" 
                            value={this.state.value} onChange={this.handleNameChange} id="exampleInputName" />
                        </div>
    
                        <div className="form-group">
                            <MdEmail color="black" size="28px" className="userIcon"/>
                            <input type="email" placeholder="Email" className="form-control" 
                            value={this.state.value} onChange={this.handleEmailChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
    
                        <div className="form-group">
                            <GiPoliceOfficerHead color="black" size="28px" className="userIcon" />
                            <input type="text" placeholder="Occupation" className="form-control" 
                            value={this.state.value} onChange={this.handleOccupationChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
    
                        <div className="form-group">
                            <MdContactPhone color="black" size="28px" className="userIcon" />
                            <input type="number" placeholder="Contact" className="form-control" 
                            value={this.state.value} onChange={this.handleContactChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
    
                        <div className="form-group">
                            <AiFillLock color="black" size="28px" className="userIcon" />
                            <input type="password" placeholder="Password" className="form-control" 
                            value={this.state.value} onChange={this.handlePasswordChange} id="exampleInputPassword1" />
                        </div>
    
                        <div className="form-group">
                            <FiKey color="black" size="28px" className="userIcon" />
                            <input type="password" placeholder="Confirm password" className="form-control" 
                            value={this.state.value} onChange={this.handleConfirmPasswordChange} id="exampleInputPassword1" />
                        </div>
    
                        <button type="submit" className="btn btn-primary submitBtn">Register</button>
                        <p className="signUp"> <Link to="/"> Already registered ? <span style={{text_decoration:"underline"}}> Login instead </span></Link> </p>
                    </form>
                    <hr className="divider"></hr>
                </div>
        )
    }
    
}

export default register;