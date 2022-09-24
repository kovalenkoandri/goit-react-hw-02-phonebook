const ContactList = props => {
  const { contacts } = props.state || [];
  const { deleteElement } = props;
  const foundContacts =
    contacts.filter(el =>
      el.name
        .toLocaleUpperCase()
        .includes(props.state.filter.toLocaleUpperCase())
    ) || contacts;
  return foundContacts.map(element => (
    <li key={element.id}>
      {`${element.name}: ${element.number} `}
      <button type="button" onClick={() => deleteElement(element.id)}>
        Delete
      </button>
    </li>
  ));
};
export default ContactList;
