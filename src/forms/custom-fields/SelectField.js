import { ErrorMessage } from 'formik';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import './styles.scss';

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <div>
      <FormGroup>
        {label && (
          <Label className="label" for={name}>
            {label}
          </Label>
        )}

        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
          disabled={disabled}
          placeholder={placeholder}
          isDisabled={disabled}
          options={options}
          className={showError ? 'is-invalid' : ''}
        />
        {console.log(showError)}
      </FormGroup>
      <ErrorMessage name={name} component={FormFeedback} />
    </div>
  );
}

export default SelectField;
