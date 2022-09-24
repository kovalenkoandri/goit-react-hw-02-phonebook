const ContactList = props => {
  const { contacts } = props.state || [];
  const foundContacts =
    contacts.filter(el => el.name.includes(props.state.filter)) || contacts;
  return foundContacts.map(element => (
    <li key={element.id}>{`${element.name}: ${element.number}`}</li>
  ));
};
export default ContactList;