import React from 'react';
import './UserData.css';

class UserData extends React.Component {

  render() {
    var data = this.props.userData;
    const items = [];
    data = Object.entries(data)[0];

    return (
      <div className="row">
        <div className="col-lg-12">
          <table className="table pull-left">
            <thead>
              <tr><th>Pulls</th>
              <th>Url</th>
            </tr></thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserData;
