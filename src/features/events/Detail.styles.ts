import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    border-left: 1px solid ${theme.colors.background.secondary};
    margin-left: -1px;
    max-width: 50%;
    min-width: 50%;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  `
);
