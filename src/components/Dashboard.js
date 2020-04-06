import React from 'react';
import './Dashboard.css';
import UserInfo from './UserInfo';
import UserData from './UserData';

class Dashboard extends React.Component {
  render() {
    var data = this.props.userData;
    var term = this.props.term.split(':')[0];
    var release = this.props.term.split(':')[1];
    if(data !== undefined && data !== null ){
      debugger
      data = Object.entries(data).find( function(obj) { return obj[0] == term } )[1]
      return (
        <React.Fragment>
        <UserInfo userUrl={data.avatar_url} searchTerm={term}/>
        <UserData userData={data[release]} />
        </React.Fragment>
      )
    } else {
      return <div> No data to display</div>;
    }
  }
}

export default Dashboard;