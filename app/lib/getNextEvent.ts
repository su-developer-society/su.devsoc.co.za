import { events, Event } from "./events";

export function getNextEvent(): Event | null {
  const now = new Date();

  const upcoming = events
    .map(event => ({ ...event, date: new Date(event.startDate) }))
    .filter(event => event.date > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return upcoming.length > 0 ? upcoming[0] : null;
}
