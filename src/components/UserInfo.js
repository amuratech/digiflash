import React from 'react';

class UserInfo extends React.Component {

  render() {
    var url = this.props.userUrl;
    var term = this.props.searchTerm;
    // const items = [];
    // Object.entries(data).forEach(([key, value]) => {
      // items.push(

      // )
    // })
    return (
      <div className="ui card pull-right">
        <img src={url} alt={term} />
        <p> {term} </p>
      </div>
    )
  }
}

export default UserInfo;