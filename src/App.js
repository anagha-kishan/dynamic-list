import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [cities, setCities] = useState(['Chennai', 'Delhi', 'Kochi']);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    setCities((prev) => [...prev, value]);

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
      <ol>
        {cities.map((item, index) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}
