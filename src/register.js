import React from 'react';
import './login.css';
import { MdEmail, MdContactPhone } from 'react-icons/md';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { AiFillLock } from 'react-icons/ai'; 
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiKey } from 'react-icons/fi';

const register = (props) => {
    return(
        <div className="col-md-4 registerPage" >
                <p className="heading">Get on Board</p>
                <form>
                    <div className="form-group">
                        <BsFillPersonPlusFill  color="black" size="28px" className="userIcon" />
                        <input type="text" placeholder="Name" className="form-control" id="exampleInputName" />
                    </div>

                    <div className="form-group">
                        <MdEmail color="black" size="28px" className="userIcon"/>
                        <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group">
                        <GiPoliceOfficerHead color="black" size="28px" className="userIcon" />
                        <input type="text" placeholder="Occupation" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group">
                        <MdContactPhone color="black" size="28px" className="userIcon" />
                        <input type="number" placeholder="Contact" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                    <p className="signUp" onClick={() => props.data.updateStatus(!props.data.registerStatus)} >Already registered ? <span style={{text_decoration:"underline"}}> Login instead </span> </p>
                </form>
                <hr className="divider"></hr>
            </div>
    )
}

export default register;