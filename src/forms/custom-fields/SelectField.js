import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';
import './styles.scss';

function SelectField(props) {
  const { field, options, label, placeholder, disabled } = props;
  const { name, value } = field;
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
        />
      </FormGroup>
    </div>
  );
}

export default SelectField;
