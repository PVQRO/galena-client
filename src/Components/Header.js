import React, { useState } from 'react';
import logo from '../Style/galena-icon-white-border.png';
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
          {' Proyecto Galena'}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://taiga.vencealvirus.software.imdea.org/project/pvqro-galena/timeline" target="_blank">Hackathon Covid-19</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/PVQRO/Proyecto-GALENA" target="_blank">GitHub</NavLink>
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
          <NavbarText>Base de datos clínicos COVID-19</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;