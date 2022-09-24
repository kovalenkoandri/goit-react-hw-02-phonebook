import css from './ContactForm.module.css';
const ContactForm = props => (
  <form className={css.phonebookForm} onSubmit={props.handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      className={css.inputName}
      // value={props.state.name} // for remember onSubmit input
      onChange={props.handleInputChange}
    />
    <label htmlFor="number">Number</label>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      className={css.inputName}
      onChange={props.handleInputChange}
      // value={props.state.number}
    />
    <button type="submit">Add contact</button>
  </form>
);

export default ContactForm;
