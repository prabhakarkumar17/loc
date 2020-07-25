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

class bankRegister extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: "",
            branchName: "vbh",
            bankAddress: "",
            bankId: "",
            password: "",
            confirmPassword: ""
        }
    }

    // handleChange = (event) => {
    //     event.preventDefault();
    //     this.setState({ [event.target.name]: event.target.value });
    //     console.log("hiiii")
    // }
    handleNameChange = (event) => {
        event.preventDefault();
        this.setState({ name: event.target.value });
    }
    handleBranchChange = (event) => {
        event.preventDefault();
        this.setState({ branchName: event.target.value });
    }
    handleAddressChange = (event) => {
        event.preventDefault();
        this.setState({ bankAddress: event.target.value });
    }
    handleIdChange = (event) => {
        event.preventDefault();
        this.setState({ bankId: event.target.value });
    }
    handlePasswordChange = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }
    handleConfirmPasswordChange = (event) => {
        event.preventDefault();
        this.setState({ confirmPassword: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log();
            const accounts = await web3.eth.getAccounts();
        
            const bankRegisterResult = await loginContract.methods.setBankDetails(
                this.state.name,
                this.state.bankAddress,
                this.state.branchName,
                this.state.bankId,
                this.state.password,
                this.state.confirmPassword
            ).send({from: accounts[0]},
                 function(err, TxHash){
                    if(!err){
                        console.log(TxHash);
                    }
                 }
                );
    }

    render(){
        return(
            <div className="col-md-4 registerPage" >
                    <p className="heading">Register Bank</p>
                    <form className="bankRegister" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <BsFillPersonPlusFill  color="black" size="28px" className="userIcon" />
                            <input type="text" placeholder="Bank Name" className="form-control" 
                            value={this.state.value} onChange={this.handleNameChange} id="exampleInputBankName" />
                        
                        </div>
    
                        <div className="form-group">
                            <MdEmail color="black" size="28px" className="userIcon"/>
                            <input type="text" placeholder="Branch Name" className="form-control"
                            onChange={this.handleBranchChange} value={this.state.value} id="exampleInputBankBranch" aria-describedby="emailHelp" />
                        </div>
    
                        <div className="form-group">
                            <MdContactPhone color="black" size="28px" className="userIcon" />
                            <input type="text" placeholder="Enter Bank Address" className="form-control"
                            onChange={this.handleAddressChange} value={this.state.value} id="exampleInputBankAddress" aria-describedby="emailHelp" />
                        </div>
    
                        <div className="form-group">
                            <MdContactPhone color="black" size="28px" className="userIcon" />
                            <input type="text" placeholder="Create Bank Id" className="form-control"
                            onChange={this.handleIdChange} value={this.state.value} id="exampleInputBankCreateId" aria-describedby="emailHelp" />
                        </div>
    
                        <div className="form-group">
                            <AiFillLock color="black" size="28px" className="userIcon" />
                            <input type="password" placeholder="Password" className="form-control"
                            onChange={this.handlePasswordChange} value={this.state.value} id="exampleInputPassword1" />
                        </div>
    
                        <div className="form-group">
                            <FiKey color="black" size="28px" className="userIcon" />
                            <input type="password" placeholder="Confirm password" className="form-control"
                            onChange={this.handleConfirmPasswordChange} value={this.state.value} id="exampleInputPassword1" />
                        </div>
    
                        <button type="submit" className="btn btn-primary submitBtn">Register</button>
                        <p className="signUp"> <Link to="/BankLogin"> Already registered ? <span style={{text_decoration:"underline"}}> Login instead </span></Link> </p>
                    </form>
                    <hr className="divider"></hr>
                </div>
            )
    
        }
    }

export default bankRegister;