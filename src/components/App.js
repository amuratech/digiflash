import React from 'react';
import git from '../api/git';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

class App extends React.Component {

  state = { pulls: {}, reviews: {} };

  // git urls
  // to fetch repos = `/users/${term}/repos`
  // to fetch user info = `/users/${term}`
  // to fetch pulls form perticular repo = GET '/repos/:owner/:repo/pulls'
  // to_check_urls_for_user = > curl -u "username" https://api.github.com
  // to check review status = /repos/amuratech/crm/pulls/18448/reviews
  // to check how many pulls are there = /repos/amuratech/crm/pulls

  onSearchSubmit = async (term) => {
    const response = await git.get(`/repos/amuratech/crm/pulls`,{
    });
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

      if(pull.labels.length > 0){
        userData[pull.user.login][pull.base.ref][pull.number]['label'] = pull.labels[0].name
      }
      if(pull.requested_reviewers.length > 0){
        userData[pull.user.login][pull.base.ref][pull.number]['reviewers'] = pull.requested_reviewers[0].login
      }
    })
    this.state.setState({ pulls: userData });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchText={this.onSearchSubmit}/>
        <UserInfo userData={this.state.data} />
      </div>
    )
  }
}

export default App;