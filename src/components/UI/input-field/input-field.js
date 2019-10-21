import React, { useState } from 'react';

import './input-field.scss';

const InputField = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const {
    icon,
    placeholder,
  } = props;

  return (
    <div className="input_field_container">
      {icon}

      <input
        type="text"
        placeholder={placeholder}
        value={enteredText}
        onChange={(event) => setEnteredText(event.target.value)}
      />
    </div>
  );
};

export default InputField;
