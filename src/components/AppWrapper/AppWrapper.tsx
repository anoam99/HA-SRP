import React, { FC, PropsWithChildren, useMemo } from 'react';
import { Line, Star, Wrapper } from './AppWrapper.styled';

const AppWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  const specialDots = [
    {
      position: [8, 8],
      color: '#6C85E6',
      outline: '#E2F1FF',
      shadow: '#56C2FF',
    },
    {
      position: [58, 37],
      color: '#6C85E6',
      outline: '#E2F1FF',
      shadow: '#56C2FF',
    },
    {
      position: [40, 5],
      color: '#6C85E6',
      outline: '#E2F1FF',
      shadow: '#56C2FF',
    },
    {
      position: [2, 3],
      color: '#FF7A00',
      outline: '#FFEDC9',
      shadow: '#FDA04B',
    },
    {
      position: [67, 10],
      color: '#FF7A00',
      outline: '#FFEDC9',
      shadow: '#FDA04B',
    },
    {
      position: [55, 14],
      color: '#FF7A00',
      outline: '#FFEDC9',
      shadow: '#FDA04B',
    },
    {
      position: [5, 30],
      color: '#FF7A00',
      outline: '#FFEDC9',
      shadow: '#FDA04B',
    },
    {
      position: [51, 29],
      color: '#FF275B',
      outline: '#FFCECE',
      shadow: '#FD668A',
    },
    {
      position: [65, 28],
      color: '#FF275B',
      outline: '#FFCECE',
      shadow: '#FD668A',
    },
    {
      position: [67, 33],
      color: '#FF275B',
      outline: '#FFCECE',
      shadow: '#FD668A',
    },
    {
      position: [20, 9],
      color: '#FF275B',
      outline: '#FFCECE',
      shadow: '#FD668A',
    },
    { position: [47, 7], color: '#E2F1FF' },
    { position: [20, 5], color: '#FFCECE' },
    { position: [24, 10], color: '#FFCECE' },
    { position: [60, 30], color: '#FFEDC9' },
    { position: [3, 10], color: '#FFEDC9' },
    { position: [9, 16], color: '#FFEDC9' },
    { position: [1, 33], color: '#FFEDC9' },
    { position: [6, 37], color: '#FFEDC9' },
  ];

  const specialLine = [{ position: [0, 20], color: '#FF275B' }];

  const specialDotsComponent = useMemo(
    () =>
      specialDots.map(({ position, color, outline, shadow }, idx) => {
        return (
          <Star
            key={idx}
            starPosition={position}
            shadow={shadow}
            dotColor={color}
            outline={outline}
          />
        );
      }),
    []
  );

  const specialLinesComponent = useMemo(
    () =>
      specialLine.map(({ position, color }, idx) => {
        return (
          <Line key={idx} linePosition={position} lineColor={color} />
        );
      }),
    []
  );

  return (
    <Wrapper>
      {specialLinesComponent}
      {specialDotsComponent}
      {children}
    </Wrapper>
  );
};

export default AppWrapper;
