import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import './styles.scss';

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && (
        <Label className="label" for={name}>
          {label}
        </Label>
      )}

      <Input
        className="input"
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
