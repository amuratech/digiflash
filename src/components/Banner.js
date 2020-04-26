import React from 'react';
import './Banner.css';
import { Row, Col, Alert } from 'react-bootstrap';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bannerList: [
        "Awaiting PR review from you is 2",
        "Reviewed by you PR as 3",
        "Changes requested by you on 1",
        "Your 2 PR in cooking status",
        "Your 1 PR waiting for merge review",
        "Your 3 PR waiting for final review"
      ],
      banner: ""
    };
  }

  componentDidMount() {
    this.setState({ banner: this.bannerChooser() });
    setInterval(() => {
      this.setState({ banner: this.bannerChooser() });
    }, 10000);
  }

  bannerChooser = () => {
    return this.state.bannerList[Math.floor(this.state.bannerList.length * Math.random())];
  }

  render() {
    return (
      <Row className="mt-5 mb-5">
        <Col>
          <Alert
            onClick={() => this.bannerChooser()}
            variant="info"
            className="text-center"
            >
            <span className="fadeInUp">{this.state.banner}</span>
          </Alert>
        </Col>
      </Row>
    );
  }
}

export default Banner;
