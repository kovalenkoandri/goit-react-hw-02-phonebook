import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
    console.log(event.currentTarget.value);
  };
  render() {
    return (
      <>
        <p className="title">Phonebook</p>
        <form className="phonebookForm">
          <label htmlFor="name" className="labelInputName">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className="inputName"
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          <button type="submit">Add contact</button>
        </form>
        <ul className="title">Contacts</ul>
      </>
    );
  }
}
export default App;
