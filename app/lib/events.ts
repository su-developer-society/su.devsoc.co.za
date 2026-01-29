export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  link: string;
  image: string; // path to banner image
}

export const events: Event[] = [
  {
    id: "welcoming-event-26",
    title: "events.welcoming-event-26-title",
    description: "events.welcoming-event-26-description",
    startDate: "2026-02-20T17:30:00+02:00",
    endDate: "2026-02-20T21:30:00+02:00",
    link: "https://forms.cloud.microsoft/r/g8yESKdz92",
    image: "/events/welcoming-event-26.png",
  },
];
