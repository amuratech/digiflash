import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://app.sell.do/"> Sell.Do</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
