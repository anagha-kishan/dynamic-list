import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [cities, setCities] = useState(['Chennai', 'Delhi', 'Kochi']);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (value === '') {
      setError('*Enter value');
      return;
    }
    setCities((prev) => [...prev, value]);
    setError('');
    setValue('');
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{error}</p>
      <ol>
        {cities.map((item, index) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}
