import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './applyForm.css';

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='mb-2 applyinput'>
      <label htmlFor={field.name}>{label}</label>
      <select
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage component='div' name={field.name} className='error' />
    </div>
  );
};

export default SelectField;
