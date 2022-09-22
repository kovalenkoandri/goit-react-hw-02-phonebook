import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

class App extends Component {
  state = {
    contacts: [],
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
    // this.props.onSubmit(console.log('hi')); //Uncaught TypeError: this.props.onSubmit is not a function why?
    // this.props.onSubmit({ ...this.state }); //Uncaught TypeError: this.props.onSubmit is not a function why?
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
  };
  render() {
    // const { contacts } = this.state; // cant use for the error above
    return (
      <>
        <p className="title">Phonebook</p>
        <form className="phonebookForm" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="labelInputName">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className="inputName"
            // value={this.state.name} // cant understand why we need it?
            onChange={this.handleInputChange}
          />
          <label htmlFor="number" className="labelInputName">
            Number
          </label>
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className="inputName"
            onChange={this.handleInputChange}
          />
          <button type="submit" value="Submit">
            Add contact
          </button>
        </form>
        <ul className="title">
          Contacts
          {this.state.contacts.map((element) => (
            <li key={element.id}>{`${element.name}: ${element.number}`}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
