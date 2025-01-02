import  { useState } from 'react';
import styles from './Form.module.css';

type InputFormProps = {
  onSubmit: (n: number) => void;
};

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = parseInt(value, 10);
    if (!isNaN(n)) {
      onSubmit(n);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, ""); 
    setValue(numericValue);
  }


  return (
    <form onSubmit={handleSubmit} className={styles['input-form']}>
      <label htmlFor="number-input">Introduce un número natural (n):</label>
      <input
        type="text"
        id="number-input"
        value={value}
        onChange={handleChange}
        min="1"
      />
      <button type="submit">Calcular</button>
    </form>
  );
};
