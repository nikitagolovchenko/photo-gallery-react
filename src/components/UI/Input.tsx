import { Box, TextField } from '@material-ui/core';
import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  name,
  onChange,
  label,
}) => {
  return (
    <Box mb={2}>
      <TextField
        fullWidth
        type={type}
        className='input'
        placeholder={placeholder}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        required
        label={label}
        autoComplete='off'
      />
    </Box>
  );
};

export default Input;
