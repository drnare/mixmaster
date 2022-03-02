import styled, { css } from 'styled-components';

export const Button = styled.button(
  ({ theme }) => css`
    appearance: none;
    border: none;
    background: none;
    color: ${theme.colors.text.primary};
    cursor: pointer;
    padding: ${theme.units.s};

    &:disabled {
      color: ${theme.colors.text.tint};
      cursor: not-allowed;
    }
  `
);

export const Icon = styled.span(
  ({ theme }) => css`
    display: inline-block;
    height: ${theme.units.l};
    width: ${theme.units.l};
    vertical-align: middle;

    svg {
      height: 100%;
      width: 100%;
    }
  `
);
