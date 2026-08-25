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
    id: "exco_election_agm_26",
    title: "Executive Committee Election & AGM 2026",
    description: "Join us for the Executive Committee Election and Annual General Meeting (AGM) of the Developer Society. This is your opportunity to shape the future of our society, participate in leadership, and contribute to our community's growth. All members are encouraged to attend, vote, and engage in the decision-making process.",
    startDate: "2026-09-03T17:30:00+02:00",
    endDate: "2026-09-03T20:00:00+02:00",
    link: "/election",
    image: "/events/SU_devsoc_exco_election_agm.png",
  },
];
