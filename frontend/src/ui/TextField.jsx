import React from "react";

const TextField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
};

export default TextField;
