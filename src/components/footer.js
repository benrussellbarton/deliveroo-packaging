import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import UK from '../images/banners/uk.png';
import { Container, Row, Col } from 'react-bootstrap';

const Section = styled.div`
  padding: 50px 0;
`

const Round = styled.img`
  border-radius: 50%;
  max-width: 18px;
  margin-right: 10px;
`

const Title = styled.p`
  color: #2D3333;
  font-weight: bold;
  font-family: 'PT Sans';
  font-size: 0.95em;
  margin-top: 20px;
`

const Item = styled.p`
  color: #828585;
  font-family: 'PT Sans';
  font-size: 0.9em;
  margin: 8px 0;
  padding: 0 10px 0 0;
`

const Link = styled.p`
  color: #828585;
  font-family: 'PT Sans';
  font-size: 0.9em;
  margin: 8px 0;
  padding: 0 10px 0 0;
  :hover {
    color: #00CEBC;
    cursor: pointer;
  }
`

const Email = styled.a`
  color: #828585;
  font-weight: bold;
  :hover {
    color: #2D3333;
  }
`

const BackgroundGrey = {
  backgroundColor: '#F8F8F8'
}

const GreenButton = styled.div`
  display: inline-block;
  background-color: #00CEBC;
  width: 100px;
  padding: 10px 0;
  margin: 10px 20px 10px 0;
  text-align: center;
  font-family: 'PT Sans';
  letter-spacing: 0.5px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  :hover {
    background-color: #00B9A8;
    cursor: pointer;
  }
`

function Footer() {
  return (
    <div>
      <Section style={ BackgroundGrey }>
        <Container>
          <Row>
            <Col xs='6' md='2' lg='2'>
              <Title>Customer Service</Title>
              <a href='https://deliveroo-packaging.com/pages/delivery'>
                <Link>Delivery</Link>
              </a>
              <a href='https://deliveroo-packaging.com/pages/faqs'>
                <Link>FAQs</Link>
              </a>
              <a href='https://deliveroo-packaging.com/pages/contact-us'>
                <Link>Contact us</Link>
              </a>
              <a href='https://deliveroo-packaging.com/pages/privacy-policy'>
                <Link>Privacy Policy</Link>
              </a>
              <a href='https://deliveroo-packaging.com/pages/terms-conditions'>
                <Link>Terms & Conditions</Link>
              </a>
              <a href='https://deliveroo-packaging.com/pages/cookies'>
                <Link>Cookies</Link>
              </a>
            </Col>
            <Col xs='6' md='3' lg='4' className='d-lg-none'>
              <Title>Subscribe</Title>
              <Item>We'd love to keep you up-to-date with our latest offers and products – just join our mailing list.</Item>
              <a href='https://deliveroo.force.com/onboarding/s/login/SelfRegister?language=en_GB&startURL=%2Fonboarding%2Fs%2Fon-boarding-uk'>
                <GreenButton>Sign up</GreenButton>
              </a>
            </Col>
            <Col xs='6' md='3' lg='3'>
              <Title>Registered Address</Title>
              <Item>Roofoods Limited
                <br />The River Building - Level 1
                <br />Cannon Bridge House
                <br />1 Cousin Lane EC4R 3TE
              </Item>
            </Col>
            <Col xs='6' md='4' lg='3'>
              <Title>Questions about your order?</Title>
              <Item>We're here to help! Email us at <Email href='/'>packaging@deliveroo.co.uk</Email> or call 01386 565 864.</Item>
            </Col>
            <Col xs='6' md='3' lg='4' className='d-none d-lg-block'>
              <Title>Subscribe</Title>
              <Item>We'd love to keep you up-to-date with our latest offers and products – just join our mailing list.</Item>
              <a href='https://deliveroo.force.com/onboarding/s/login/SelfRegister?language=en_GB&startURL=%2Fonboarding%2Fs%2Fon-boarding-uk'>
                <GreenButton>Sign up</GreenButton>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs='6' md='2' lg='2' className='mt-5'>
              <Item>
                © 2019 Deliveroo
              </Item>
            </Col>
            <Col xs='6' md='3' lg='4' className='mt-5'>
              <Link><Round src={ UK } alt='Location' />United Kingdom</Link>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default Footer;
