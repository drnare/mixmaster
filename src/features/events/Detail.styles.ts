import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    border-left: 2px solid ${theme.colors.background.hint};
    margin-left: -1px;
    max-width: 50%;
    min-width: 50%;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width: 800px) {
      border-left: none;
      border-top: 2px solid ${theme.colors.border.primary};
      max-width: 100%;
      min-width: 100%;
      margin-top: auto;
      margin-left: 0;
    }
  `
);
