import React from 'react';
import git from '../api/git';
import SearchBar from './SearchBar';
import Dashboard from './Dashboard';
import PrList from './PrList';
// import UserInfo from './UserInfo';

class App extends React.Component {

  state = { pulls: null, searchTerm: '' };

  // git urls
  // to fetch repos = `/users/${term}/repos`
  // to fetch user info = `/users/${term}`
  // to fetch pulls form perticular repo = GET '/repos/:owner/:repo/pulls'
  // to_check_urls_for_user = > curl -u "username" https://api.github.com
  // to check review status = /repos/amuratech/crm/pulls/18448/reviews
  // to check how many pulls are there = /repos/amuratech/crm/pulls

  onSearchSubmit = async (term) => {
    const response = await git.get(`/repos/amuratech/crm/commits`,{
    });
    debugger
    const userData = {};
    response.data.forEach(function(pull){
      if(userData[pull.user.login] === undefined){
        userData[pull.user.login] = {}
      }
      if(userData[pull.user.login][pull.base.ref] === undefined){
        userData[pull.user.login][pull.base.ref] = {}
      }
      if(userData[pull.user.login][pull.base.ref][pull.number] === undefined){
        userData[pull.user.login][pull.base.ref][pull.number] = {}
      }

      userData[pull.user.login][pull.base.ref][pull.number]['title'] = pull.title
      userData[pull.user.login][pull.base.ref][pull.number]['pull_url'] = pull.url
      userData[pull.user.login][pull.base.ref][pull.number]['pull_updated_at'] = pull.updated_at
      userData[pull.user.login]['avatar_url'] = pull.user.avatar_url;

      if(pull.labels.length > 0){
        userData[pull.user.login][pull.base.ref][pull.number]['label'] = pull.labels[0].name
      }
      if(pull.requested_reviewers.length > 0){
        userData[pull.user.login][pull.base.ref][pull.number]['reviewers'] = pull.requested_reviewers[0].login
      }
    })
    debugger
    this.setState({ pulls: userData, searchTerm: term });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchText={this.onSearchSubmit} />
        <Dashboard userData={this.state.pulls} term={this.state.searchTerm} />
        <PrList PrData={this.state.pr_data} />
      </div>
    )
  }
}

export default App;