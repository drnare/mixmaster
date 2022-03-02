import styled, { css } from 'styled-components';

export const Table = styled.table(
  ({ theme }) => css`
    align-self: flex-start;
    border-collapse: collapse;
    color: ${theme.colors.text.primary};
    width: 100%;
  `
);

export const Tr = styled.tr<{ active?: boolean; onClick?: () => void }>(
  ({ active, onClick, theme }) => css`
    background: ${theme.colors.background.primary};
    width: 100%;

    &:nth-child(even) {
      background: ${theme.colors.background.secondary};
    }

    ${onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${theme.colors.background.hintOver};
      }
    `}
    ${active &&
    css`
      background: ${theme.colors.background.hint};
      &:nth-child(even) {
        background: ${theme.colors.background.hint};
      }
    `}
  `
);

export const Td = styled.td<{ nowrap?: boolean }>(
  ({ nowrap, theme }) => css`
    border: 1px solid ${theme.colors.border.primary};
    border-left: 0;
    border-top: 0;
    padding: ${theme.units.s};
    white-space: break-word;

    ${nowrap &&
    css`
      white-space: nowrap;
    `}
  `
);

export const Th = styled(Td)`
  font-weight: bold;
`;
