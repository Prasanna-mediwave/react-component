// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children:any
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

