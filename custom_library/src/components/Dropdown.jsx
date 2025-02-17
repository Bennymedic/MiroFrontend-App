
import React from 'react';

const Dropdown = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="custom-select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
