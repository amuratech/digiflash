import React from 'react';
import './UserData.css';

class UserData extends React.Component {

  render() {
    var data = this.props.userData;
    const items = [];
    data = Object.entries(data)[0];
    Object.entries(data).forEach(([key, value]) => {
      items.push(
        <tr>
          <td dataLabel="Pull">{value}</td>
        </tr>
      )
    })
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
