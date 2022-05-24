import React from "react";
import PropTypes from "prop-types";

import "./styles/select-filter.css";

export const SelectFilter = ({
  className,
  data,
  datatestid,
  id,
  label,
  name,
  onChange,
  options,
  onSubmit,
  required,
  value,
}) => {
  return (
    <div className="select">
      <label>
        <p>{label}</p>
        <select
          className={className}
          data={data}
          datatestid={datatestid}
          id={id}
          name={name}
          onChange={onChange}
          options={options}
          onSubmit={onSubmit}
          required={required}
          value={value}
        >
          {data.map((options) => (
            <option key={options.id} value={options.value}>
              {options.label}
            </option>
          ))}
        </select>
      </label>

      <br />
    </div>
  );
};

SelectFilter.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  datatestid: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

SelectFilter.defaultProps = {
  value: "",
  placeholder: "",
};

export default SelectFilter;
