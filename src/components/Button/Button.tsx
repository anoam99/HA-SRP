import { FC, PropsWithChildren } from 'react';
import { Button as ButtonRoot } from '@mui/material';
import { ButtonRootProps } from './Button.types';

const Button: FC<PropsWithChildren<ButtonRootProps>> = ({
  children,
  ...props
}) => {
  return <ButtonRoot {...props}>{children}</ButtonRoot>;
};

export default Button;
