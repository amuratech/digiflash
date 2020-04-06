import React from 'react';
import git from '../api/git';
import './Style.css';

class PrList extends React.Component {
  state = {pr_data: null}

  onButtonClicked = async (term) => {
    const response = await git.get(`repos/amuratech/crm/pulls`, {
      params: {state: 'all'} // we can pass other states too such as open, closed, merged etc
    });
    this.setState({ pr_data: response.data });
  }

  render() {
    const pr_data_present = (this.state.pr_data !== null && this.state.pr_data !== undefined);

    return (
      <div>
        <div className="Ui card mt-40">
          <div className="ui segment">
            <button className="ui primary button" onClick={this.onButtonClicked}>
              Fetch All PRs
            </button>
          </div>
        </div>

        {/* replace the below table with the data fetched using the above api and iterate it using a loop. Use the structure provided below. */}        
        <table className="ui celled table">
          <thead>
            <tr><th>PR Link</th>
            <th>Author</th>
            <th>Status</th>
          </tr></thead>
          <tbody>
            {pr_data_present
              ? (this.state.pr_data.map(function(object, i){              
                  return(
                    <tr key={object.id}>
                      <td data-label="prLink">{object.url}</td>
                      <td data-label="author">{object.user.login}</td>
                      <td data-label="status">{object.state}</td>
                    </tr>
                  )                
                })
                )       
              : <tr> No data to display </tr>          
            }
          </tbody>
        </table>
      </div>
    );
  } 
}

export default PrList;
