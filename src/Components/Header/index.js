import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../../images/galena-icon-white-border.png';
import './index.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navBarStyle = {
    fontStyle: "bold",
    fontSize: "bold",
    color: "red",
  }

  return (
  <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} style={{width:40, marginTop: -7}} />
          {' Galena Databook'}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://devpost.com/software/galena-databook" target="_blank">Devpost </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/PVQRO" target="_blank">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/upload" activeClassName="active">Upload Report</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/dashboard" activeClassName="active">Database</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/about" activeClassName="active">About</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>Clinic Database for COVID-19</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;