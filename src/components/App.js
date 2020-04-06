import React from 'react';
import git from '../api/git';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import PrList from'./PrList';

class App extends React.Component {

  state = { data: null };

  onSearchSubmit = async (term) => {
    const response = await git.get(`/users/${term}`);
    this.setState({ data: response.data });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchText={this.onSearchSubmit}/>
        <UserInfo userData={this.state.data} />
        <PrList PrData={this.state.pr_data} />
      </div>
    )
  }
}

export default App;