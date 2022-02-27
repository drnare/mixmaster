import { useEffect, useState } from 'react';
import { MIXPANEL_URLS } from '../../constants';
import { MixpanelEvent } from '../../types';
import Table from '../../components/table';
import * as Styled from './Events.styles';
import { Detail } from './Detail';

export const Events = () => {
  const [events, setEvents] = useState<MixpanelEvent[]>([]);
  const [activeEvent, setActiveEvent] = useState<MixpanelEvent>();

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(({ request }) => {
      if (MIXPANEL_URLS.some(url => request.url.includes(url))) {
        setEvents(prevState => [getPayload(request.url), ...prevState]);
      }
    });
  }, []);

  const getPayload = (url: string) => ({
    ...decodePayload(getPayloadFromUrl(url)),
    created: new Date(),
  });

  const getPayloadFromUrl = (url: string) =>
    String(new URL(url).searchParams.get('data'));

  const decodePayload = (data: string) =>
    JSON.parse(atob(decodeURIComponent(data)));

  if (events.length === 0) {
    return (
      <Styled.Empty>
        <h1>No events</h1>
        <p>As you browse and trigger events, they will appear here.</p>
      </Styled.Empty>
    );
  }

  return (
    <Styled.Container>
      <Styled.EventsWrapper>
        <Table.Table>
          <Table.Row>
            <Table.Head>Date</Table.Head>
            <Table.Head>Event</Table.Head>
            <Table.Head>Journey</Table.Head>
            <Table.Head>URL</Table.Head>
          </Table.Row>
          {events.map(event => (
            <Table.Row
              key={event.properties.distinct_id}
              onClick={() =>
                setActiveEvent(
                  activeEvent?.created.toISOString() ===
                    event.created.toISOString()
                    ? undefined
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
  );
};
