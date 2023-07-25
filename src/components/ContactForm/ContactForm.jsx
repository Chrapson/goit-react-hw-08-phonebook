import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import styles from './ContactForm.module.css';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    const isDuplicate = () => {
      return contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
      );
    };
    if (isDuplicate()) {
      alert(`${contact.name} already exists`);
      return;
    }

    dispatch(addContact(contact));
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form__label}>Name</label>
      <input
        className={styles.form__input}
        type="text"
        name="name"
        placeholder="Enter contact name"
        required
      />
      <label className={styles.form__label}>Number</label>
      <input
        className={styles.form__input}
        type="number"
        name="number"
        placeholder="Enter contact number"
        required
      />

      <button className={styles.form__button} type="submit">
        Add Contact
      </button>
    </form>
  );
};
