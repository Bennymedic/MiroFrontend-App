// TextInput.jsx
import React from 'react';

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="custom-text-input"
    />
  );
};

export default TextInput;
