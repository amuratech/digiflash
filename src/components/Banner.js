import React from 'react';
import './Banner.css';
import { Row, Col, Alert } from 'react-bootstrap';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bannerList: [
        "Always add security label for security tickets",
        "Get clarity on the ticket before moving the ticket to ready to start",
        "Check all the checklists before passing to peer/merge reviews",
        "Get your pr reviews done within 2 days if possible"
      ],
      banner: ""
    };
  }

  componentDidMount() {
    this.setState({ banner: this.bannerChooser() });
    setInterval(() => {
      this.setState({ banner: this.bannerChooser() });
    }, 5000);
  }

  bannerChooser = () => {
    return this.state.bannerList[Math.floor(this.state.bannerList.length * Math.random())];
  }

  render() {
    return (
      <Row className="mt-5 mb-5 fadeInUp">
        <Col>
          <Alert
            onClick={() => this.bannerChooser()}
            variant="info"
            className="text-center" 
            >
            <span>{this.state.banner}</span>
          </Alert>
        </Col>
      </Row>
    );
  }
}

export default Banner;
