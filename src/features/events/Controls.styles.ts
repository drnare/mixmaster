import styled, { css } from 'styled-components';
import { Button } from '../../components/button';

export const Controls = styled.div(
  ({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border.primary};
    display: flex;
    justify-content: flex-end;
    padding: ${theme.units.s};
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 100%;
    height: calc(${theme.units.l} * 2);
  `
);

export const Record = styled(Button)<{ active: boolean }>(
  ({ theme, active }) =>
    active &&
    css`
      color: ${theme.colors.text.alert};
    `
);
