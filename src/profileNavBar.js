import React from 'react';
import { Link } from 'react-router-dom';
import './profileNavBar.css'
import context from 'react-bootstrap/esm/AccordionContext';
import {MyContext} from './MyContext'

const navBar = () => {

  return (
    <div className="profileNavBar">
       <nav className="navbar navbar-light bg-light">
          <Link to='/userProfile' className="navbar-brand navHeading">User Dashboard</Link>  

          <MyContext.Consumer>
            {context => (
              <h4>
                Welcome {context.state.userName}
              </h4>
              
            )}
          </MyContext.Consumer>    

          <Link to="/userProfile/apply" className="nav-item applicationLOC">Apply LOC</Link>
          <Link to='/userProfile/myProfile' className="myProfile">My Profile</Link>
       </nav>
    </div>
  );
}

  

export default navBar;