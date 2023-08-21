import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        onChange={handleChangeFilter}
        type="search"
        name="filter"
        placeholder="Find"
      />
    </div>
  );
};
