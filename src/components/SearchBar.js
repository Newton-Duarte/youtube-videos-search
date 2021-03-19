import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  onInpuChange = event => {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="search"
              placeholder="search..."
              value={this.state.term}
              onChange={this.onInpuChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;