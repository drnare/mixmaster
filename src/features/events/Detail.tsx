import * as Table from '../../components/table/Table';
import { MixpanelEvent } from '../../types';
import * as Styled from './Detail.styles';

export interface DetailProps {
  event?: MixpanelEvent;
}

export const Detail = ({ event }: DetailProps) => {
  if (!event) {
    return null;
  }

  return (
    <Styled.Container>
      <Table.Table>
        {Object.entries(event.properties).map(([key, value]) => (
          <Table.Row key={key}>
            <Table.Head>{key}</Table.Head>
            <Table.Data>{value}</Table.Data>
          </Table.Row>
        ))}
      </Table.Table>
    </Styled.Container>
  );
};
