import { ReactNode } from 'react';
import * as Styled from './Button.styles';

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  title?: string;
}

export const Button = ({ icon, children, ...rest }: ButtonProps) => (
  <Styled.Button {...rest}>
    <Styled.Icon>{icon}</Styled.Icon>
    {children}
  </Styled.Button>
);
