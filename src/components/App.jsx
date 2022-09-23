import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

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
    this.props.onSubmit(this.state); // show state on submit
    // console.log(event.currentTarget.elements[0].value);
    // console.log(event.currentTarget.elements[1].value);
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
  };
  render() {
    // this.props.onSubmit(this.state); //show state on render
    const { contacts } = this.state || []; // internal state
      const foundContacts = contacts.filter(el =>
        el.name
          .toLocaleUpperCase()
          .includes(this.state.filter.toLocaleUpperCase())
      ) || [];
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
            value={this.state.name} // cant understand why we need it?
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
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
        <label htmlFor="find" className="labelInputName">
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
          {foundContacts.map(element => (
            <li key={element.id}>{`${element.name}: ${element.number}`}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
