import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { signIn, signOut } from '../actions';

const CLIENT_ID = "f62e1f4242f2975a640f";
const REDIRECT_URI = "http://localhost:3000/";

class GithubAuth extends React.Component {  

  componentDidMount() {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      let code = newUrl[1];    

      fetch(`http://localhost:5000/authenticate/${code}`)
      .then(response => response.json())
      .then(({ token }) => {
        this.props.signIn(token);
        localStorage.setItem("authDetails", JSON.stringify({accessToken: token}));
        var newURL = window.location.href.split("?")[0]; // this removes the code params returned in the response
        window.history.pushState('object', document.title, newURL);
      });
    }

    // this is written because when page reloads the redux object losses its values hence we 
    // need re-initialize the token from the localstorage.    
    var authCreds = JSON.parse(localStorage.getItem("authDetails"))['accessToken']

    if (!_.isEmpty(authCreds)) {
      this.props.signIn(authCreds);
    }    
  }

  onSignOut = () => {
    localStorage.setItem("authDetails", JSON.stringify({}));
    this.props.signOut();
    window.location.reload();
  };

  renderAuthButton() {
    if (this.props.authInfo.isSignedIn === null) {
      return (
        <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user repo&redirect_uri=${REDIRECT_URI}`} >
          Sign in with Github
        </a>          
      );      
    } else if (this.props.authInfo.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="btn btn-outline-danger">
        <i className="google icon" />
          Sign Out
        </button>    
      );     
    } else {
      return (
        <button onClick={this.onSignOut} className="btn btn-outline-danger">
          <i className="google icon" />
          Sign in with Github
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;            
  }
}

const mapStateToProps = state => {
  return { authInfo: state.auth };
}

export default connect(mapStateToProps, {signIn, signOut})(GithubAuth);