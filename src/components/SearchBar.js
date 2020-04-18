import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  // can use this for on click event
  // onInputClick(event) {
  //   console.log('Input is clicked');
  // }

  onFormSubmit = event => {
    event.preventDefault();
    // console.log(`I am calling from SearchBar: ${this.state.term}`);
    this.props.searchText(this.state.term);
  }

  render(){
    // we are not going to add () to this.onInputChange as if we did this that will call on render but we dontonFormSubmit want on render, we want it on change of input
    // we can write onChange event like onChange={(event) => console.log('foo')}
    return(
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label for="email">Search Git User:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.term}
                onChange={(event) => this.setState({ term: event.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
 }

}

export default SearchBar;
