const ContactList = props => {
  const { contacts } = props.state || [];
  const foundContacts =
    contacts.filter(el =>
      el.name
        .toLocaleUpperCase()
        .includes(props.state.filter.toLocaleUpperCase())
    ) || contacts;
  const deleteElement = () => (console.log('h'));
  return foundContacts.map(element => (
    <li key={element.id}>
      {`${element.name}: ${element.number} `}
      <button type="button" onClick={deleteElement}>
        Delete
      </button>
    </li>
  ));
};
export default ContactList;