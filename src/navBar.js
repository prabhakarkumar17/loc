import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const navBar = (props) => {
//   const [collapsed, setCollapsed] = useState(true);
     var collapsed = true;
     const toggleNavbar = () => {
         collapsed = !collapsed;
     };

  return (
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">Reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default navBar;