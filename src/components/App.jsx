import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
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
          name: event.currentTarget.elements.name.value,
          number: event.currentTarget.elements.number.value,
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
  filterContacts = (str) => {
    if (str.length === 0) {
      this.state.filter !== undefined &&
        this.setState({ contacts: [...this.state.filter] });
    } else {
      this.setState({filter: [...this.state.contacts]});
      this.setState(state => ({
        contacts: state.contacts.filter(remain => remain.name.includes(str)),
      }));
    }
  };
  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={css.title}>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList
          {...{
            state: this.state,
            deleteElement: this.deleteElement,
          }}
        />
      </div>
    );
  }
}

export default App;
