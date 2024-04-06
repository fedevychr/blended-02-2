import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const query = value.trim();
    if (!query.length) return;

    onSubmit(query);
  };

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={value}
        onChange={handleChange}
        required
        autoFocus
      />
    </form>
  );
};
