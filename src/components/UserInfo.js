import React from 'react';
import './UserInfo.css';

class UserInfo extends React.Component {

  render() {
    if(this.props.userData !== undefined && this.props.userData !== null ){
      const data = this.props.userData;

      return (
        <div className="ui card">
          <img src={data.avatar_url} alt={data.login} />
          <p> {data.login} </p>
        </div>
      )
    } else {
      return <div> No data to display</div>;
    }
  }
}

export default UserInfo;