import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const contactsObj = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;

    if (
      contactsObj.some(
        user => user.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return alert(`${name.value} is already in contacts`);
    }

    const contact = {
      name: name.value,
      phone: phone.value,
    };

    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
      <label>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.buttonAdd} type="submit">
        add contact
      </button>
    </form>
  );
};
