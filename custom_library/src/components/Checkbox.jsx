
import React, {useState} from 'react';
import './style/customStyle.css'

const Checkbox = ({ label, checked, onChange }) => {

  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
