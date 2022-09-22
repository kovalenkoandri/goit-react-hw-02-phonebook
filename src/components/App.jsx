import React, { Component } from 'react';
import './App.css';
// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.state.contacts.push(this.state.name);
    event.currentTarget.elements.name.value = '';
  };
  render() {
    // console.log(nanoid());

    return (
      <>
        <p className="title">Phonebook</p>
        <form className="phonebookForm" onSubmit={this.handleSubmit}>
          <button type="submit">Add contact</button>
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
            // value={this.state.name}
            onChange={this.handleInputChange}
          />
        </form>
        <ul className="title">Contacts</ul>
        {this.state.contacts.map((element, idx) => (
          <li key={idx}>{idx}</li>
        ))}
      </>
    );
  }
}
export default App;
