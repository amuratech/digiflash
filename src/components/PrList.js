import React from 'react';
import git from '../api/git';
import './Style.css';

class PrList extends React.Component {
  state = {pr_data: null, term: '', state: 'all', sort: 'asc' }

    // we can pass other states too such as open, closed, merged etc
  onButtonClicked = async () => {
    const response = await git.get(`repos/amuratech/crm/pulls`, {
      params: { state: this.state.state, base: this.state.base, sort: this.state.sort }
    });
    this.setState({ pr_data: response.data });
  }

  componentDidMount(){
    this.onButtonClicked();
  }

  render() {
    const pr_data_present = (this.state.pr_data !== null && this.state.pr_data !== undefined);

    return (
      <div className="row">
        <div className="col-lg-12">
          <button className="btn btn-primary float-right mb-3" onClick={this.onButtonClicked}>
            Refresh PRs
          </button>
          {/* replace the below table with the data fetched using the above api and iterate it using a loop. Use the structure provided below. */}
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>PR Link</th>
                <th>Author</th>
                <th>Status</th>
              </tr>
            </thead>
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
      </div>
    );
  }
}

export default PrList;
