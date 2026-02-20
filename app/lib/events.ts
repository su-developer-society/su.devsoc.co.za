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
  {
    id: "div-and-conquer-hackathon-26",
    title: "events.div-and-conquer-title",
    description: "events.div-and-conquer-description",
    startDate: "2026-02-27T17:30:00+02:00",
    endDate: "2026-03-03T00:00:00+02:00",
    link: "https://hackathon.devsoc.co.za",
    image: "/events/div-and-conquer-2026.jpg",
  },
];
