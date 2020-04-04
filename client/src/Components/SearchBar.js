import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className="ui segment"
        style={{ margin: "10px 40px 10px 40px ", flexGrow: "1" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Search </label>
          <div className="field" style={{ display: "flex" }}>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <button onClick={this.onFormSubmit}>
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
