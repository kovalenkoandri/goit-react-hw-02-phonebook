import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './App.module.css';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    for (const duplicate of this.state.contacts) {
      if (
        event.currentTarget.elements.name.value.toLocaleUpperCase() ===
        duplicate.name.toLocaleUpperCase()
      ) {
        alert(`${duplicate.name} is already in contacts.`);
        return;
      }
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        },
      ],
    });
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
  };
  deleteElement = id =>
    this.setState({
      contacts: this.state.contacts.filter(removed => removed.id !== id),
    });
  render() {
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        <h2 className={css.title}>Contacts</h2>
        <Filter handleInputChange={this.handleInputChange} />
        <ContactList state={this.state} deleteElement={this.deleteElement} />
      </>
    );
  }
}

export default App;
