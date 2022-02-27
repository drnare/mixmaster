import { ReactNode } from 'react';
import * as Styled from './Table.styles';

export interface TableProps {
  children?: ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return <Styled.Table>{children}</Styled.Table>;
};

export const Head = Styled.Th;
export const Row = Styled.Tr;
export const Data = Styled.Td;
