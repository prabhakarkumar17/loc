import React from 'react';
import { Link } from 'react-router-dom';
import './profileNavBar.css'
import './bankNavBar.css'
import context from 'react-bootstrap/esm/AccordionContext';
import {MyContext} from './MyContext'

const navBar = () => {

  return (
    <div className="profileNavBar">
       <nav className="navbar navbar-light bg-light">
          <Link to='/userProfile/userDashboard' className="navbar-brand navHeading">User Dashboard</Link>  

          <MyContext.Consumer>
            {context => (
              <h4 className="greetings">
                Welcome {context.state.userName}
              </h4>
              
            )}
          </MyContext.Consumer>    
          <div className="navItems">
            <Link to="/userProfile/apply" className="nav-item applicationLOC">Apply LOC</Link>
            <Link to='/userProfile/myProfile' className="myProfile">My Profile</Link>
            <Link to ='/' className="logout">Logout</Link>
          </div>
          
       </nav>
    </div>
  );
}

  

export default navBar;