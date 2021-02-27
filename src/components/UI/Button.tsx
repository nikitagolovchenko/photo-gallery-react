import { Button } from '@material-ui/core';
import React, { ButtonHTMLAttributes, FC } from 'react';

// extends ButtonHTMLAttributes<HTMLButtonElement> - чтобы получить свойства html элемента кнопки:
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
}

const ButtonUI: FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type,
  disabled,
  color
}) => {
  return (
    <Button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
