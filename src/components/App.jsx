import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    // this.props.onSubmit(this.state); // show state on submit
    // console.log(event.currentTarget.elements[0].value);
    // console.log(event.currentTarget.elements[1].value);
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
    // this.props.onSubmit(ContactList);
  };
 
  render() {
    // this.props.onSubmit(this.state); //show state on render
    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          state={this.state}
          handleInputChange={this.handleInputChange}
        />

        <label htmlFor="filter" className="labelInputName">
          Find contacts by name
        </label>
        <input
          type="text"
          name="filter"
          className="inputName"
          onChange={this.handleInputChange}
          value={this.state.filter}
        />
        <ul className="title">
          Contacts
          <ContactList state={this.state} />
        </ul>
      </>
    );
  }
}



export default App;
