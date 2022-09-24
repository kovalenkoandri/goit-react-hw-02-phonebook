const ContactList = props => {
  const { contacts } = props.state || [];
  const foundContacts =
    contacts.filter(el =>
      el.name
        .toLocaleUpperCase()
        .includes(props.state.filter.toLocaleUpperCase())
    ) || contacts;
  return foundContacts.map(element => (
    <li key={element.id}>{`${element.name}: ${element.number}`}</li>
  ));
};
export default ContactList;