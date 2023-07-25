import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import styles from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
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
