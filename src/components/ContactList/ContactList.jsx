import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactList/ContacListItem/ContatcListItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.length === 0 ? (
        <li className={styles.listItem}>No contacts found</li>
      ) : (
        contacts.map(contact => (
          <li className={styles.listItem} key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))
      )}
    </ul>
  );
};
