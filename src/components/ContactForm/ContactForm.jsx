import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
const Input = styled(Field)`
  font-size: 20px;
`;

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer().max(1),
});
const ContactForm = props => {
  const state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={state}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.phonebookForm}>
        {/* <form className={css.phonebookForm} onSubmit={props.handleSubmit}> */}
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.inputName}
          // value={state.name} // for remember onSubmit input
          // onChange={props.handleInputChange}
        />
        <ErrorMessage name="name" component="div" />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.inputName}
          // onChange={props.handleInputChange}
          // value={state.number}
        />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
