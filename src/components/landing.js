import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Truck from '../images/landing/truck-green.png';
import Background from '../images/landing/background.svg';
import PackageMobile from '../images/landing/food-packaging-mobile.png';
import EcoPackageMobile from '../images/landing/eco-packaging-mobile.png';
import Package from '../images/landing/food-packaging.png';
import EcoPackage from '../images/landing/eco-packaging.png';

const TruckStyle = styled.img`
  max-width: 120px;
`

const Heading = styled.h1`
  margin: 123px 0 20px 0;
  padding-right: 100px;
  color: #2D3333;
  @media (max-width: 992px) {
    margin-top: 100px;
    padding-right: 0;
  }
  @media (min-width: 1200px) {
    margin-top: 210px;
    padding-right: 0;
  }
`

const SubHeading = styled.p`
  padding-right: 92px;
  color: #828585;
  @media (min-width: 1200px) {
    padding-right: 130px;
  }
  @media (max-width: 520px) {
    padding-right: 0;
  }
`

const BackgroundImage = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${ Background })`
};

const CarouselDesktop = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  max-width: 45vw;
  @media (max-width: 1200px) {
    min-width: 50vw;
  }
`

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

function Landing() {
  return (
    <div style={ BackgroundImage }>
      <Container>
        <Row>
          <Col lg='6' xl='7'>
            <Heading>Food packaging made easy</Heading>
            <SubHeading>Want to take the hassle out of ordering packaging for your restaurant? We’ve selected the best packaging to make that choice easy for you.</SubHeading>
            <SubHeading>We also stock a range of biodegradable packaging and our pulp based products are sourced from sustainable forests. Each product is rated on its impact on the environment.</SubHeading>
              <a href='https://deliveroo-packaging.com/collections/all'>
                <GreenButton>Shop all</GreenButton>
              </a>
              <a href='https://deliveroo-packaging.com/collections/eco-packaging'>
                <GreenButton>Shop eco</GreenButton>
              </a>
            <TruckStyle src={ Truck } alt='48h Delivery' />
          </Col>
        </Row>
      </Container>
      {/* Carousel Desktop */}
      <CarouselDesktop>
        <Carousel className='d-none d-lg-block' fade controls={ false } indicators={ false }>
          <Carousel.Item>
            <img className='d-block w-100 mt-3' src={ Package } alt='Packaging' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100 mt-3' src={ EcoPackage } alt='Eco Packaging' />
          </Carousel.Item>
        </Carousel>
      </CarouselDesktop>
      {/* Carousel Mobile */}
      <Container fluid className='d-block d-lg-none'>
        <Row>
          <Col xs='12' className='px-0'>
            <Carousel fade controls={ false } indicators={ false }>
              <Carousel.Item>
                <img className='d-block w-100' src={ PackageMobile } alt='Packaging' />
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={ EcoPackageMobile } alt='Eco Packaging' />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
