import React from 'react';
import git from '../api/git';
import './Style.css';

class PrList extends React.Component {
  state = {pr_data: null, term: '', state: 'all', sort: 'asc' }

  onButtonClicked = async (term) => {
    // we can pass other states too such as open, closed, merged etc
    // var base = $('.base').val()
    const response = await git.get(`repos/amuratech/crm/pulls`, {
      params: { state: this.state.state, base: this.state.base, sort: this.state.sort }
    });
    this.setState({ pr_data: response.data });
  }

  render() {
    const pr_data_present = (this.state.pr_data !== null && this.state.pr_data !== undefined);

    return (
      <div>
        <div className="Ui card mt-40">
          <div className="ui segment">
            <select onChange={(event) => this.setState({ base: event.target.value })}>
              <option value="r1.45.0">r1.45.0</option>
              <option value="r1.46.0">r1.46.0</option>
              <option value="r1.47.0">r1.47.0</option>
              <option value="r1.48.0">r1.48.0</option>
            </select>
            <select onChange={(event) => this.setState({ state: event.target.value })}>
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
            <select onChange={(event) => this.setState({ sort: event.target.value })}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <button className="ui primary button" onClick={this.onButtonClicked}>
              Fetch PRs
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
                      <td data-label="prLink"><a href={object.url}>{object.url}</a></td>
                      <td data-label="author">{object.user.login}</td>
                      <td data-label="status">{object.state}</td>
                    </tr>
                  )
                })
                )
              : <tr><td>No data to display</td></tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrList;
