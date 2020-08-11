import React from 'react';
import { Link } from 'react-router-dom';
import './bankNavBar.css'
import { MyContext} from './MyContext'

const bankNavBar = () => {
  return (
    <div className="bankNavBar">
       <nav className="navbar navbar-light bg-light">
        <Link to='/BankLogin/bankDashboard' className="navbar-brand navHeading">Bank Dashboard</Link>

        <MyContext.Consumer>
          {context => (
            <div className="wlcmMsg">
              <p className="greetings">
                Welcome {context.state.bankName}
              </p>
            </div>
            
          )}
        </MyContext.Consumer>
      
       <div className="navItems">
         <Link to="/BankLogin/requestedLC" className="requestedLOC">Requested LOC</Link>
         <Link to='/BankLogin/bankProfile' className="bankProfile">Bank Profile</Link>
         <Link to='/' className="logout">Logout</Link>
       </div>
       
       </nav>
    </div>
  );
}

  

export default bankNavBar;