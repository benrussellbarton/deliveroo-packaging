import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Section = styled.div`
  padding: 0;
`

const BackgroundGrey = {
  backgroundColor: '#F8F8F8'
}

function Footer() {
  return (
    <div>
      <Section style={ BackgroundGrey }>
        <Container>
          <Row className='text-center'>
            <Col>
              <a href="/">
                <p>Footer Test</p>
              </a>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
}

export default Footer;
