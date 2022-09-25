const ContactList = props => {
  const { contacts } = props.state || [];
  const { renderContactList } = props;
  const foundContacts =
    contacts.filter(el =>
      el.name
        .toLocaleUpperCase()
        .includes(props.state.filter.toLocaleUpperCase())
    ) || contacts;
  return renderContactList(foundContacts);
};
export default ContactList;
