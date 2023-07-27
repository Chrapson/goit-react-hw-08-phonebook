import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import styles from './ContactForm.module.css';
import { selectContacts } from 'redux/contacts/selectors';
import contactsIcon from '../../images/svg/symbol-defs.svg';

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
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Enter contact name"
        required
      />
      <label className={styles.label}>Number</label>
      <input
        className={styles.input}
        type="number"
        name="number"
        placeholder="Enter contact number"
        required
      />

      <button className={styles.button} type="submit">
        Add Contact
        <svg className={styles.icon} width="25" height="25">
          <use href={`${contactsIcon}#add`} />
        </svg>
      </button>
    </form>
  );
};
