import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import SampleImage from '../images/sample.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Heading = styled.h2`
  margin: 65px 0 10px 0;
  color: white;
  @media (max-width: 1200px) {
    font-size: 1.6em;
  }
`

const Section = styled.div`
  padding: 0 0 20px 0;
`

const Box = styled.div`
  height: 300px;
  border-radius: 5px;
  padding: 30px;
`

const Background = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ SampleImage })`
};

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

function SampleBanner() {
  return (
    <div>
      <Section className='grey-background'>
        <Container>
          <Row>
            <Col>
              <Box style={ Background }>
                <Heading className="d-none d-lg-block">Test us out with free samples</Heading>
                <Heading className="d-lg-none">Test us out with <br />free samples</Heading>
                <a href="https://deliveroo-packaging.com/pages/free-samples">
                  <GreenButton>Order here</GreenButton>
                </a>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default SampleBanner;
