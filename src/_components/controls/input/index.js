import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

function FormInput(props) {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <Controller
      as={TextField}
      name={name}
      control={control}
      defaultValue=""
      label={label}
      fullWidth={true}
      {...props}
    />
  );
}

export default FormInput;
