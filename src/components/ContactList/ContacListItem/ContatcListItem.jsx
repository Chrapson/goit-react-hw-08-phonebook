import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import styles from './ContactListItem.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button
        className={styles.add__button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
