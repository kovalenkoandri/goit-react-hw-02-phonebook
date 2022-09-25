import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './App.module.css';
import { nanoid } from 'nanoid';
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
  renderContactList = arr =>
    arr.map(element => (
      <div key={element.id} className={css.renderDiv}>
        {`${element.name}: ${element.number} `}
        <button type="button" onClick={() => this.deleteElement(element.id)}>
          Delete
        </button>
      </div>
    ));
  filterContacts = arr =>
    arr.filter(el =>
      el.name
        .toLocaleUpperCase()
        .includes(this.state.filter.toLocaleUpperCase())
    ) || this.state.contacts;
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
        <ContactList
          state={this.state}
          renderContactList={this.renderContactList}
          filterContacts={this.filterContacts}
        />
      </>
    );
  }
}

export default App;
