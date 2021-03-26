import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{"padding":"15px"}}>
            <Link href="/"><a style={{"color":"#fff", "fontWeight":"500","padding":"0 15px"}}>Home</a></Link>
            <Link href="/users"><a style={{"color":"#fff", "fontWeight":"500"}}>Users List</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
