import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'
import './bankNavBar.css'

const navBar = () => {
  return (
    <div className="mainNavBar">
       <nav className="navbar navbar-light bg-light">
        <Link to='/' className="navbar-brand navHeading">Letter Of Credit</Link>

        <div className="navItems">
          <Link to="/BankLogin" className="bankSection">Bank Section</Link>
          <Link to='/' className="customerSection">Customer Section</Link>
        </div>
        <hr></hr>
       
       
       </nav>
    </div>
  );
}

  

export default navBar;