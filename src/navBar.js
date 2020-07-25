import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

const navBar = () => {
  return (
    <div className="navBar">
       <nav className="navbar navbar-light bg-light">
        <Link to='/' className="navbar-brand">Letter Of Credit</Link>

       <Link to="/BankLogin" className="bankSection">Bank Section</Link>
       <Link to='/' className="customerSection">Customer Section</Link>
       
       </nav>
    </div>
  );
}

  

export default navBar;