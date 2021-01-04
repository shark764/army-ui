import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

function FormSelect({ options, ...props }) {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <Controller
      as={
        <TextField select>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </TextField>
      }
      name={name}
      control={control}
      defaultValue=""
      label={label}
      fullWidth={true}
      {...props}
    />
  );
}

export default FormSelect;
