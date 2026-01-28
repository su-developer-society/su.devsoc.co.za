import { events, Event } from "./events";

const now = () => new Date();

export function isLive(event: Event) {
  const current = now();
  return (
    new Date(event.startDate) <= current &&
    new Date(event.endDate) >= current
  );
}

export function getNextEvent(): Event | null {
  const upcoming = events
    .filter(e => new Date(e.startDate) > now())
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() -
        new Date(b.startDate).getTime()
    );

  return upcoming[0] ?? null;
}

export function getLiveEvent(): Event | null {
  return events.find(isLive) ?? null;
}

export function getAllEvents() {
  return [...events].sort(
    (a, b) =>
      new Date(a.startDate).getTime() -
      new Date(b.startDate).getTime()
  );
}
