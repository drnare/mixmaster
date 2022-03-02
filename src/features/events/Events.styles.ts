import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding-top: calc(${theme.units.l} * 2);

    @media (max-width: 800px) {
      flex-direction: column;
    }
  `
);

export const EventsWrapper = styled.div`
  max-height: 100vh;
  max-width: 100%;
  overflow: auto;
  width: 100%;
`;

export const Empty = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text.primary};
    padding: ${theme.units.l};
  `
);
