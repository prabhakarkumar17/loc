import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

const bankNavBar = () => {
  return (
    <div className="navBar">
       <nav className="navbar navbar-light bg-light">
        <Link to='/userProfile' className="navbar-brand">Bank Dashboard</Link>

       <Link to="/userProfile/apply" className="applicationLOC">Requested LOC</Link>
       <Link to='/userProfile/myProfile' className="myProfile">Bank Profile</Link>
       
       </nav>
    </div>
  );
}

  

export default bankNavBar;