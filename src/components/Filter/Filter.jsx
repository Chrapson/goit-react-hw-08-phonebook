import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter__wrapper}>
      <label className={styles.filter__label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={styles.filter__input}
        onChange={handleChangeFilter}
        type="search"
        name="filter"
        placeholder="Find"
      />
    </div>
  );
};
