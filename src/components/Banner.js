import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

class Banner extends React.Component {
  render() {
    return (
      <Row className="mt-5 mb-5">
        <Col>
          <Alert variant="info">
            <marquee>
              Pending 2 PR review..
            </marquee>
          </Alert>
        </Col>
      </Row>
    );
  }
}

export default Banner;
