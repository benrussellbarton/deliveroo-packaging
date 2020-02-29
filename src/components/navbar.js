import React from 'react';
import Logo from '../images/nav/deliveroo.svg';
import Cart from '../images/nav/cart.jpg';
import { Navbar, Nav, Container, NavDropdown, InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Label  = {
  margin: '0 30px 0 0',
  width: '350px',
  fontFamily: 'PT Sans'
};

const NavbarStyle  = {
  padding: '20px 0',
  backgroundColor: 'white'
};

const GreenBackground  = {
  backgroundColor: '#00CEBC'
};

const NavText = styled.p`
  font-family: 'PT Sans';
  letter-spacing: 0.5px;
  margin: 0 0 0 30px;
  color: black;
  :hover {
    color: #00CEBC;
  }
`

const NavLogo = styled.img`
  height: 32px;
  margin: 0;
`

const NavLink  = {
  paddingRight: '0'
};

const LoginText = styled.p`
  font-family: 'PT Sans';
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0 10px;
  color: white;
  font-weight: bold;
`

const DropdownText = styled.p`
  font-family: 'PT Sans';
  letter-spacing: 0.5px;
  margin: 10px 0;
  color: black;
`

const LoginLink  = styled.div`
  background-color: #00CDBC;
  margin-left: 30px;
  border-radius: 5px;
  :hover {
    background-color: #00B9A8;
    cursor: pointer;
  }
`

const CartStyle = styled.img`
  max-height: 20px;
  margin: 10px 0 0 30px;
  :hover {
    cursor: pointer;
  }
`

function Navigation() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="light" style={ NavbarStyle }>
        <Navbar.Brand>
          <NavLogo src={ Logo } className="logo" alt="Deliveroo Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* Shop Mobile */}
            <div className="d-block d-lg-none">
              <Nav.Link style={ NavLink }>
                <NavText>Shop</NavText>
              </Nav.Link>
            </div>
            {/* Desktop Nav */}
            <label style={ Label }>
              <InputGroup>
                <FormControl placeholder="What are you looking for?" aria-label="Search" aria-describedby="Search" />
                <InputGroup.Append>
                  <InputGroup.Text id="Search" style={ GreenBackground }><span role="img" aria-label='Magnifying Glass'>🔍</span></InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </label>
            <NavDropdown className="d-none d-lg-block" title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">
                <DropdownText>Packaging Essentials</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <DropdownText>Type</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <DropdownText>Eco</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <DropdownText>Cuisine</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <DropdownText>Deliveroo Branded</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <DropdownText>Signage</DropdownText>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={ NavLink }>
              <NavText>Samples</NavText>
            </Nav.Link>
            <Nav.Link style={ NavLink }>
              <NavText>Help</NavText>
            </Nav.Link>
            <CartStyle src={ Cart } className="d-none d-lg-block" alt='48h Delivery' />
            {/* Cart and Login Mobile */}
            <div className="d-block d-lg-none">
              <Nav.Link style={ NavLink }>
                <NavText>Cart</NavText>
              </Nav.Link>
            </div>
            <div className="d-block d-lg-none">
              <Nav.Link style={ NavLink }>
                <NavText>Log in</NavText>
              </Nav.Link>
            </div>
            {/* Cart and Login Mobile END */}
            <LoginLink className="d-none d-lg-block">
              <Nav.Link>
                <LoginText>Log in</LoginText>
              </Nav.Link>
            </LoginLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;
