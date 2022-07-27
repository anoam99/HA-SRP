import React, { FC, PropsWithChildren } from 'react';
import { CardWrapper } from './Card.styled';

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
