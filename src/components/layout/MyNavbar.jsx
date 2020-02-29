import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand
        className="text-white"
        href="/portfolio"
        style={{ marginLeft: "2.5em" }}
      >
        PATRICK M. KORIANSKI
      </NavbarBrand>
      <NavbarToggler style={{ backgroundColor: "white" }} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar style={{ marginRight: "1.5em" }}>
          <NavItem>
            <NavLink className="text-white" href="/portfolio" left>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" href="/portfolio/projects" left>
              Projects
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
