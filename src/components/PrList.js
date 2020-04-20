import React from 'react';
import git from '../api/git';
import Pagination from './Pagination';
import './Style.css';

class PrList extends React.Component {
  constructor() {
    super();
    this.state = { pr_data: null, term: '', state: 'all', sort: 'asc', base: null, pageOfItems: [] }
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
  }
    // we can pass other states too such as open, closed, merged etc
  onButtonClicked = async () => {
    var params = { state: this.state.state, sort: this.state.sort };
    if(this.state.base != null){
      params['base'] = this.state.base;
    }
    const response = await git.get(`repos/amuratech/crm/pulls`, {
      params: params
    });
    this.setState({ pr_data: response.data });
  }

  componentDidMount() {
    this.onButtonClicked();
  }

  render() {
    const pr_data_present = (this.state.pr_data !== null && this.state.pr_data !== undefined);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Base Branch</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01" onChange={(event) => this.setState({ state: event.target.value })}>
                <option value="r1.45.0">r1.45.0</option>
                <option value="r1.46.0">r1.46.0</option>
                <option value="r1.47.0">r1.47.0</option>
                <option value="r1.48.0">r1.48.0</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Pr Status</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01" onChange={(event) => this.setState({ state: event.target.value })}>
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Sort</label>
              </div>
              <select className="custom-select" id="inputGroupSelect01" onChange={(event) => this.setState({ sort: event.target.value })}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
          <div className="col">
            <button className="btn btn-primary float-right mb-3" onClick={this.onButtonClicked}>
              Refresh PRs
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* replace the below table with the data fetched using the above api and iterate it using a loop. Use the structure provided below. */}
            <table className="table table-striped table-bordered table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>PR Link</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Label</th>
                </tr>
              </thead>
              <tbody>
                {pr_data_present
                  ? (this.state.pageOfItems.map(function(object, i){
                      return(
                        <tr key={object.id}>
                          <td data-label="prLink">{object.html_url}</td>
                          <td data-label="author">{object.user.login}</td>
                          <td data-label="status">{object.state}</td>
                          <td data-label="status" className="badge badge-pill badge-success" >{ object.labels.length !== 0 ? object.labels[object.labels.length - 1].name : 'NA'}</td>
                        </tr>
                      )
                    })
                    )
                  : <tr><td> No data to display </td></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
          {pr_data_present ? (
            <div>
              <Pagination items={ this.state.pr_data } onChangePage={ this.onChangePage } />
            </div>
          ) : ''
          }
      </React.Fragment>
    );
  }
}

export default PrList;
