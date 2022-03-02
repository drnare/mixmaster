import { Dispatch, SetStateAction } from 'react';
import { Button } from '../../components/button';
import { Delete, Download, Record, Recording } from '../../components/icons';
import * as Styled from './Controls.styles';

export interface ControlsProps {
  eventCount: number;
  onClear: () => void;
  onDownload: () => void;
  onRecord: Dispatch<SetStateAction<boolean>>;
  recording: boolean;
}

export const Controls = ({
  eventCount,
  recording,
  onClear,
  onDownload,
  onRecord,
}: ControlsProps) => {
  return (
    <Styled.Controls>
      <Styled.Record
        active={recording}
        onClick={() => onRecord(!recording)}
        icon={recording ? <Recording /> : <Record />}
        title={recording ? 'Pause logging' : 'Resume logging'}
      />
      <Button
        onClick={onClear}
        icon={<Delete />}
        disabled={eventCount === 0}
        title="Clear all logged events"
      />
      <Button
        onClick={onDownload}
        icon={<Download />}
        disabled={eventCount === 0}
        title="Download logged events"
      />
    </Styled.Controls>
  );
};
