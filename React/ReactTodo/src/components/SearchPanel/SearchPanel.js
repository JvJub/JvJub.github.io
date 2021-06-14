import React, { Component } from 'react';

// Import Assets Files:
import './SearchPanel.css';

// SearchPanel:
export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onChangeHandler = (event) => {
    const term = event.target.value;
    
    this.setState({
      term
    });
    this.props.onChangeHandler(term)

  }

  render() {

    return (

      <input
      type="text"
      className="form-control search-input"
      placeholder="Type To Search"
      value={this.state.term}
      onChange={this.onChangeHandler}
      />

    )

  }

}

