import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const EventsWrapper = styled.div`
  max-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

export const Empty = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text.primary};
    padding: ${theme.units.l};
  `
);
