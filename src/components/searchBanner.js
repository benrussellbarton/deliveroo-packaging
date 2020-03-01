import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import SearchImage from '../images/banners/search.jpg';
import MagnifyingGlass from '../images/nav/search.png';
import GreenBodyBackground from '../images/banners/background-bottom.svg';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const Heading = styled.h2`
  margin: 25px 0 10px 0;
  color: white;
  @media (max-width: 1200px) {
    font-size: 1.6em;
  }
`

const Section = styled.div`
  padding: 0;
`

const Green  = {
  backgroundColor: '#00CEBC'
};

const Box = styled.div`
  height: 217px;
  border-radius: 5px;
  padding: 30px;
  margin: 25px 0 70px 0;
`

const CupBackground = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${ SearchImage })`
};

const GreenBackground = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  backgroundImage: `url(${ GreenBodyBackground })`
};

const Label  = {
  margin: '10px auto',
  fontFamily: 'PT Sans'
};

const SearchStyle = styled.img`
  max-width: 17px;
  padding-bottom: 3px;
`

function SearchBanner() {
  return (
    <div>
      <Section className='grey-background'>
      <div style={ GreenBackground }>
        <Container>
          <Row className='text-center'>
            <Col>
              <Box style={ CupBackground }>
                <Heading>Now go and find what you need...</Heading>
                <label style={ Label } className='w-75'>
                  <InputGroup>
                    <FormControl placeholder='What are you looking for?' aria-label='Search' aria-describedby='Search' />
                    <InputGroup.Append>
                      <InputGroup.Text id='Search' style={ Green }>
                        <a href='/'>
                          <SearchStyle src={ MagnifyingGlass } alt='Magnifying Glass' />
                        </a>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </label>
              </Box>
            </Col>
          </Row>
        </Container>
        </div>
      </Section>
    </div>
  );
}

export default SearchBanner;
