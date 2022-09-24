import css from './ContactList.module.css';
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
    <div key={element.id} className={css.renderDiv}>
      {`${element.name}: ${element.number} `}
      <button type="button" onClick={() => deleteElement(element.id)}>
        Delete
      </button>
    </div>
  ));
};
export default ContactList;
