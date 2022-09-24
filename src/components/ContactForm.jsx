const ContactForm = props => (
    <form className="phonebookForm" onSubmit={props.handleSubmit}>
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
            value={props.state.name} // cant understand why we need it?
            onChange={props.handleInputChange}
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
            onChange={props.handleInputChange}
            value={props.state.number}
        />
        <button type="submit">Add contact</button>
    </form>
);

export default ContactForm;