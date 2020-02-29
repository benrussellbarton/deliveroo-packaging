import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import TruckCircle from '../images/truck-circle.png';
import PoundCircle from '../images/pound-circle.png';
import BinCircle from '../images/bin-circle.png';
import { Container, Row, Col } from 'react-bootstrap';

const CircleStyle = styled.img`
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
  color: #828585;
`

const Section = styled.div`
  padding: 150px 0 50px 0;
  @media (min-width: 992px) {
    padding-top: 70px;
  }
  @media (max-width: 800px) {
    padding: 40px 0;
  }
`

function FirstSection() {
  return (
    <div>
      <Section className='grey-background'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col md='4'>
              <CircleStyle src={ TruckCircle } alt='Free Delivery' />
              <Heading>Free delivery</Heading>
              <SubHeading>We offer next day delivery as standard</SubHeading>
            </Col>
            <Col md='4'>
              <CircleStyle src={ PoundCircle } alt='Price Promise' />
              <Heading>Price promise</Heading>
              <SubHeading>Any profit we make we put back into giving you better pricing</SubHeading>
            </Col>
            <Col md='4'>
              <CircleStyle src={ BinCircle } alt='Independently Tested' />
              <Heading>Independently tested</Heading>
              <SubHeading>We thoroughly test all our packaging - see our “Roo rating” on every product</SubHeading>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default FirstSection;
