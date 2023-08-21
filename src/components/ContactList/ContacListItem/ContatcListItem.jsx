import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import styles from './ContactListItem.module.css';
import contactsIcon from '../../../images/svg/symbol-defs.svg';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button className={styles.button} type="button" onClick={handleDelete}>
        Delete
        <svg className={styles.icon} width="25" height="25">
          <use href={`${contactsIcon}#delete`} />
        </svg>
      </button>
    </>
  );
};
