import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import TruckCircle from '../images/banners/truck-circle.png';
import PoundCircle from '../images/banners/pound-circle.png';
import BinCircle from '../images/banners/bin-circle.png';
import { Container, Row, Col } from 'react-bootstrap';

const Circle = styled.img`
  max-width: 100px;
  margin: 30px;
`

const Heading = styled.h2`
  margin-bottom: 20px;
  color: #2D3333;
  font-size: 1.8em;
  @media (max-width: 1200px) {
    font-size: 1.6em;
  }
`

const SubHeading = styled.p`
  color: #2D3333;
  fontFamily: 'PT Sans';
  font-size: 0.9em;
  padding: 0 50px;
  @media (max-width: 1200px) {
    padding: 0;
  }
`

const Section = styled.div`
  padding: 180px 0 50px 0;
  @media (min-width: 992px) {
    padding-top: 70px;
  }
  @media (max-width: 800px) {
    padding-top: 80px;
  }
`

function FreeDeliverySection() {
  return (
    <div>
      <Section className='grey-background'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col md='4'>
              <Circle src={ TruckCircle } alt='Free Delivery' />
              <Heading className='d-md-none d-lg-block'>Free delivery</Heading>
              <Heading className='d-none d-md-block d-lg-none'>Free <br />delivery</Heading>
              <SubHeading>We offer next day delivery as standard</SubHeading>
            </Col>
            <Col md='4'>
              <Circle src={ PoundCircle } alt='Price Promise' />
              <Heading className='d-md-none d-lg-block'>Price promise</Heading>
              <Heading className='d-none d-md-block d-lg-none'>Price <br />promise</Heading>
              <SubHeading>Any profit we make we put back into giving you better pricing</SubHeading>
            </Col>
            <Col md='4'>
              <Circle src={ BinCircle } alt='Independently Tested' />
              <Heading>Independently tested</Heading>
              <SubHeading>We thoroughly test all our packaging - see our “Roo rating” on every product</SubHeading>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default FreeDeliverySection;
