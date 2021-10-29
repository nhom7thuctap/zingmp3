import { ErrorMessage } from 'formik';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import './styles.scss';

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

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
        invalid={showError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;