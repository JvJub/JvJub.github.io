import React, { Component } from 'react';

// Import React Components:

// Import Assets:
import './ItemFormAdd.css';

// ItemFormAdd Component
export default class ItemFormAdd extends Component {

  state = {
    label: ''
  }

  onLabelChange = (event) => {
    const target = event.target;

    this.setState({
      label: target.value
    })
  };

  onSubmit = (event) => {
    const input = document.querySelector('.input-add')
    event.preventDefault();

    if (input.value !== '' && input.value.length >= 4) {
      this.props.addItem(this.state.label);

      this.setState({
        label: ''
      })
    }
  }

  render() {

    return (

      <form className='item-add-form' onSubmit={this.onSubmit}>
        <input
          className="input-add form-control"
          type='text' placeholder="Enter your todo:"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button
          className="btn btn-outline-primary"
        >Add Todo</button>
      </form>

    )

  }
}