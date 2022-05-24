import React from "react";
import PropTypes from "prop-types";

import "./styles/form-inputs.css";

const FormInput = (props) => {
  const {
    className,
    datatestid,
    id,
    label,
    placeholder,
    required,
    type,
    name,
    value,
    onChange,
    onSubmit,
  } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        className={className}
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        datatestid={datatestid}
        id={id}
        required={required}
        onSubmit={onSubmit}
      />
    </div>
  );
};

// Type checks props using the react library
FormInput.propTypes = {
  className: PropTypes.string,
  datatestid: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default FormInput;