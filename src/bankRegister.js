import React from 'react';
import './login.css';
import { MdEmail, MdContactPhone } from 'react-icons/md';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { AiFillLock } from 'react-icons/ai'; 
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiKey } from 'react-icons/fi';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const bankRegister = (props) => {
    return(
        <div className="col-md-4 registerPage" >
                <p className="heading">Register Bank</p>
                <form className="bankRegister">
                    <div className="form-group">
                        <BsFillPersonPlusFill  color="black" size="28px" className="userIcon" />
                        <input type="text" placeholder="Bank Name" className="form-control" id="exampleInputBankName" />
                    </div>

                    <div className="form-group">
                        <MdEmail color="black" size="28px" className="userIcon"/>
                        <input type="text" placeholder="Branch Name" className="form-control" id="exampleInputBankBranch" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group">
                        <MdContactPhone color="black" size="28px" className="userIcon" />
                        <input type="text" placeholder="Enter Bank Address" className="form-control" id="exampleInputBankAddress" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group">
                        <MdContactPhone color="black" size="28px" className="userIcon" />
                        <input type="text" placeholder="Create Bank Id" className="form-control" id="exampleInputBankCreateId" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group">
                        <AiFillLock color="black" size="28px" className="userIcon" />
                        <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="form-group">
                        <FiKey color="black" size="28px" className="userIcon" />
                        <input type="password" placeholder="Confirm password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary submitBtn">Register</button>
                    <p className="signUp"> <Link to="/BankLogin"> Already registered ? <span style={{text_decoration:"underline"}}> Login instead </span></Link> </p>
                </form>
                <hr className="divider"></hr>
            </div>
    )
}

export default bankRegister;