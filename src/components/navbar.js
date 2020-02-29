import React from 'react';
import Logo from '../images/nav/deliveroo.svg';
import Cart from '../images/nav/cart.jpg';
import Search from '../images/nav/search.png';
import { Navbar, Nav, Container, NavDropdown, InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Label  = {
  margin: '0 30px 0 0',
  width: '350px',
  fontFamily: 'PT Sans'
};

const SearchStyle = styled.img`
  max-width: 17px;
  padding-bottom: 3px;
`

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
    background-color: #00C0AF;
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
        <Navbar.Brand href="/">
          <NavLogo src={ Logo } className="logo" alt="Deliveroo Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* Shop Mobile */}
            <div className="d-block d-lg-none">
              <Nav.Link href="https://deliveroo-packaging.com/collections/all" style={ NavLink }>
                <NavText>Shop</NavText>
              </Nav.Link>
            </div>
            {/* Desktop Nav */}
            <label style={ Label } className="d-none d-lg-block">
              <InputGroup>
                <FormControl placeholder="What are you looking for?" aria-label="Search" aria-describedby="Search" />
                <InputGroup.Append>
                  <InputGroup.Text id="Search" style={ GreenBackground }>
                    <a href="/">
                      <SearchStyle src={ Search } alt='Magnifying Glass' />
                    </a>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </label>
            <NavDropdown className="d-none d-lg-block" title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://deliveroo-packaging.com/collections/all-essentials">
                <DropdownText>Packaging Essentials</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://deliveroo-packaging.com/pages/packaging-types">
                <DropdownText>Type</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://deliveroo-packaging.com/collections/eco-packaging">
                <DropdownText>Eco</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://deliveroo-packaging.com/pages/shop-by-cuisine">
                <DropdownText>Cuisine</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://deliveroo-packaging.com/collections/deliveroo-branded">
                <DropdownText>Deliveroo Branded</DropdownText>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://deliveroo-packaging.com/collections/signage">
                <DropdownText>Signage</DropdownText>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://deliveroo-packaging.com/pages/free-samples" style={ NavLink }>
              <NavText>Samples</NavText>
            </Nav.Link>
            <Nav.Link href="https://deliveroo-packaging.com/blogs/helpful-hints" style={ NavLink }>
              <NavText>Help</NavText>
            </Nav.Link>
            <a href="https://deliveroo-packaging.com/cart">
              <CartStyle src={ Cart } className="d-none d-lg-block" alt='48h Delivery' />
            </a>
            {/* Cart and Login Mobile */}
            <div className="d-block d-lg-none">
              <Nav.Link href="https://deliveroo-packaging.com/cart" style={ NavLink }>
                <NavText>Cart</NavText>
              </Nav.Link>
            </div>
            <div className="d-block d-lg-none">
              <Nav.Link href="https://deliveroo-packaging.com/account/login" style={ NavLink }>
                <NavText>Log in</NavText>
              </Nav.Link>
            </div>
            {/* Cart and Login Mobile END */}
            <LoginLink className="d-none d-lg-block">
              <Nav.Link href="https://deliveroo-packaging.com/account/login">
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
