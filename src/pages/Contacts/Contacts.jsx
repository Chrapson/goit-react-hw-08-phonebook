import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import styles from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <div className={styles.wrapper}>
        <div>{isLoading && 'Request in progress...'}</div>
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.subheader}>Contacts</h2>
        <Filter />
        {isLoading && !error && <LoadingSpinner />}
        <ContactList />
      </div>
    </>
  );
};
