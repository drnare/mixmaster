import { useEffect, useState } from 'react';
import { MIXPANEL_URLS } from '../../constants';
import { MixpanelEvent } from '../../types';
import Table from '../../components/table';
import * as Styled from './Events.styles';
import { Detail } from './Detail';
import { Controls } from './Controls';

export const Events = () => {
  const [events, setEvents] = useState<MixpanelEvent[]>([]);
  const [activeEvent, setActiveEvent] = useState<MixpanelEvent | null>(null);
  const [recording, setRecording] = useState(true);

  useEffect(() => {
    recording &&
      chrome.devtools.network.onRequestFinished.addListener(handleLog);
    !recording &&
      chrome.devtools.network.onRequestFinished.removeListener(handleLog);

    return () => {
      chrome.devtools.network.onRequestFinished.removeListener(handleLog);
    };
  }, [recording]);

  const handleLog = ({ request }: chrome.devtools.network.Request) => {
    if (MIXPANEL_URLS.some((url) => request.url.includes(url))) {
      setEvents((prevState) => [getPayload(request.url), ...prevState]);
    }
  };

  const handleDownload = () => {
    const json = JSON.stringify(events);
    const link = document.createElement('a');
    link.setAttribute(
      'href',
      window.URL.createObjectURL(new Blob([json], { type: 'octet/stream' }))
    );
    link.setAttribute('download', 'events.json');
    link.click();
  };

  const handleClear = () => {
    setActiveEvent(null);
    setEvents([]);
  };

  const getPayload = (url: string) => ({
    ...decodePayload(getPayloadFromUrl(url)),
    created: new Date(),
  });

  const getPayloadFromUrl = (url: string) =>
    String(new URL(url).searchParams.get('data'));

  const decodePayload = (data: string) =>
    JSON.parse(atob(decodeURIComponent(data)));

  const controls = (
    <Controls
      onRecord={setRecording}
      recording={recording}
      onClear={handleClear}
      onDownload={handleDownload}
      eventCount={events.length}
    />
  );

  if (events.length === 0) {
    return (
      <>
        {controls}
        <Styled.Container>
          <Styled.Empty>
            <h1>No events</h1>
            <p>As you browse and trigger events, they will appear here.</p>
          </Styled.Empty>
        </Styled.Container>
      </>
    );
  }

  return (
    <>
      {controls}
      <Styled.Container>
        <Styled.EventsWrapper>
          <Table.Table>
            <Table.Row>
              <Table.Head>Date</Table.Head>
              <Table.Head>Event</Table.Head>
              <Table.Head>Journey</Table.Head>
              <Table.Head>URL</Table.Head>
            </Table.Row>
            {events.map((event) => (
              <Table.Row
                key={event.properties.distinct_id}
                onClick={() =>
                  setActiveEvent(
                    activeEvent?.created.toISOString() ===
                      event.created.toISOString()
                      ? null
                      : event
                  )
                }
                active={
                  activeEvent?.created.toISOString() ===
                  event.created.toISOString()
                }
              >
                <Table.Data nowrap>{event.created.toISOString()}</Table.Data>
                <Table.Data nowrap>{event.event}</Table.Data>
                <Table.Data nowrap>{event.properties.journey}</Table.Data>
                <Table.Data nowrap>{event.properties.url}</Table.Data>
              </Table.Row>
            ))}
          </Table.Table>
        </Styled.EventsWrapper>
        {activeEvent && <Detail event={activeEvent} />}
      </Styled.Container>
    </>
  );
};
