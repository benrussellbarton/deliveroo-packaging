import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import EssentialsCrop from '../images/packaging-essentials-crop.png';
import SignageCrop from '../images/signage-crop.png';
import CuisineCrop from '../images/shop-by-cuisine-crop.png';
import TypeCrop from '../images/shop-by-type-crop.png';
import Essentials from '../images/packaging-essentials.jpg';
import Signage from '../images/signage.jpg';
import Cuisine from '../images/shop-by-cuisine.jpg';
import Type from '../images/shop-by-type.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Heading = styled.h3`
  margin-bottom: 20px;
  color: #00CEBC;
  @media (max-width: 1200px) {
    font-size: 1.6em;
  }
`

const EssentialsBackground = {
  backgroundPosition: 'right',
  backgroundSize: '290px',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ EssentialsCrop })`
};

const SignageBackground = {
  backgroundPosition: 'right',
  backgroundSize: '290px',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ SignageCrop })`
};

const CuisineBackground = {
  backgroundPosition: 'right',
  backgroundSize: '290px',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ CuisineCrop })`
};

const TypeBackground = {
  backgroundPosition: 'right',
  backgroundSize: '290px',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ TypeCrop })`
};

const EssentialsBackgroundMobile = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ Essentials })`
};

const SignageBackgroundMobile = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ Signage })`
};

const CuisineBackgroundMobile = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ Cuisine })`
};

const TypeBackgroundMobile = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ Type })`
};

const ListItem = styled.p`
  color: #2D3333;
  margin-bottom: 5px;
  font-size: 0.9em;
  :hover {
    color: #00B9A8;
  }
`

const ViewAll = styled.p`
  color: #00CEBC;
  margin-bottom: 5px;
  font-weight: bold;
  :hover {
    color: #00B9A8;
  }
`

const Section = styled.div`
  padding: 30px 0;
`

const Card = styled.div`
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 30px;
  margin-bottom: 30px;
  @media (min-width: 576px) {
    height: 290px;
  }
`

function ShopSection() {
  return (
    <div>
      <Section className='grey-background d-none d-sm-block'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg='8' xl='6'>
              <Card style={ EssentialsBackground }>
                <Heading className="d-block d-sm-none d-md-block d-xl-none">Packaging Essentials</Heading>
                <Heading className="d-none d-sm-block d-md-none d-xl-block">Packaging<br />Essentials</Heading>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>All essentials</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Best sellers</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>New in</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/all">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
            <Col lg='8' xl='6'>
              <Card style={ TypeBackground }>
                <Heading>Shop by Type</Heading>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Burger / Chips solutions</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Pizza boxes</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Hot food - board</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Hot food - plastic</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Soup / hot liquid containers</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Salad bowls and portion pots</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/all">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
            <Col lg='8' xl='6'>
              <Card style={ CuisineBackground }>
                <Heading>Shop by Cuisine</Heading>
                <a href="https://deliveroo-packaging.com/collections/american-burgers">
                  <ListItem>American / Burgers</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/pan-asian">
                  <ListItem>Pan-Asian</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/italian-pasta-pizza">
                  <ListItem>Italian / Pasta / Pizza</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/british">
                  <ListItem>British</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/mexican">
                  <ListItem>Mexican / Tacos</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/middle-eastern-food">
                  <ListItem>Middle-eastern food</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/all">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
            <Col lg='8' xl='6'>
              <Card style={ SignageBackground }>
                <Heading>Signage</Heading>
                <a href="https://deliveroo-packaging.com/collections/internal-signage">
                  <ListItem>Internal Signage</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/external-signage">
                  <ListItem>External Signage</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/signage">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
      {/* XS Mobile Card */}
      <Section className='grey-background d-xs-block d-sm-none'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col lg='8' xl='6'>
              <Card style={ EssentialsBackgroundMobile }>
                <Heading className="d-block d-sm-none d-md-block d-xl-none">Packaging Essentials</Heading>
                <Heading className="d-none d-sm-block d-md-none d-xl-block">Packaging<br />Essentials</Heading>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>All essentials</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Best sellers</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>New in</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/all">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
            <Col lg='8' xl='6'>
              <Card style={ TypeBackgroundMobile }>
                <Heading>Shop by Type</Heading>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Burger / Chips solutions</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Pizza boxes</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Hot food - board</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Hot food - plastic</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Soup / hot liquid containers</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/cart">
                  <ListItem>Salad bowls and portion pots</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/all">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
            <Col lg='8' xl='6'>
              <Card style={ CuisineBackgroundMobile }>
                <Heading>Shop by Cuisine</Heading>
                <a href="https://deliveroo-packaging.com/collections/american-burgers">
                  <ListItem>American / Burgers</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/pan-asian">
                  <ListItem>Pan-Asian</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/italian-pasta-pizza">
                  <ListItem>Italian / Pasta / Pizza</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/british">
                  <ListItem>British</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/mexican">
                  <ListItem>Mexican / Tacos</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/middle-eastern-food">
                  <ListItem>Middle-eastern food</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/all">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
            <Col lg='8' xl='6'>
              <Card style={ SignageBackgroundMobile }>
                <Heading>Signage</Heading>
                <a href="https://deliveroo-packaging.com/collections/internal-signage">
                  <ListItem>Internal Signage</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/external-signage">
                  <ListItem>External Signage</ListItem>
                </a>
                <a href="https://deliveroo-packaging.com/collections/signage">
                  <ViewAll>View all</ViewAll>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default ShopSection;
