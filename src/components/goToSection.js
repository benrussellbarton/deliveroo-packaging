import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import TickImage from '../images/banners/tick.svg';
import { Container, Row, Col } from 'react-bootstrap';

const Heading = styled.h3`
  margin: 50px 0;
  color: #2D3333;
  text-align: center;
`

const SubHeading = styled.h4`
  margin-bottom: 20px;
  color: #2D3333;
  @media (max-width: 1200px) {
    font-size: 1.6em;
  }
`

const Details = styled.p`
  color: #828585;
  padding-right: 30px;
`

const Section = styled.div`
  padding: 30px 0;
`

const Tick = styled.img`
  max-width: 28px;
  margin-right: 5px;
`

function GoToSection() {
  return (
    <div>
      <Section className='grey-background'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='12'>
              <hr />
            </Col>
            <Col md='12'>
              <Heading>What makes us the go-to guys?</Heading>
            </Col>
            <Col xs='10' sm='12' md='4'>
              <SubHeading className='d-none d-md-block d-xl-none'>Quality assured packaging<Tick src={ TickImage } alt='Tick' className='ml-2' /></SubHeading>
              <SubHeading className='d-md-none d-xl-block'><Tick src={ TickImage } alt='Tick' />Quality assured packaging</SubHeading>
              <Details>We want you to have the best packaging for your needs – that's why we test for heat retention, toughness and stability.</Details>
            </Col>
            <Col xs='10' sm='12' md='4'>
              <SubHeading className='d-none d-md-block d-xl-none'>Best prices,<br /> guaranteed<Tick src={ TickImage } alt='Tick' className='ml-2' /></SubHeading>
              <SubHeading className='d-md-none d-xl-block'><Tick src={ TickImage } alt='Tick' />Best prices, guaranteed</SubHeading>
              <Details>Being exclusive to us means you get the lowest prices, as well as the highest quality packaging.</Details>
            </Col>
            <Col xs='10' sm='12' md='4'>
              <SubHeading className='d-none d-md-block d-xl-none'>Hassle-free,<br /> stress-free<Tick src={ TickImage } alt='Tick' className='ml-2' /></SubHeading>
              <SubHeading className='d-md-none d-xl-block'><Tick src={ TickImage } alt='Tick' />Hassle-free, stress-free</SubHeading>
              <Details>We'll deliver within 48 hours – and orders over £100 are free.</Details>
            </Col>
            <Col md='12'>
              <hr className='mt-5' />
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default GoToSection;
