// src/components/Autocomplete.jsx
import React, { useState } from 'react';


const Autocomplete = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};


export default Autocomplete;
