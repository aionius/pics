import React, { Component } from "react";

class SearchBar extends Component {
  // constructor() {
  //   super();
  //   this.state = { term: "" };
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  // state = { term: "" };
  // onFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // };

  state = { term: "" };
  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
