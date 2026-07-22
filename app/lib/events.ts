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
    id: "div-and-conquer-hackathon-26",
    title: "events.div-and-conquer-title",
    description: "events.div-and-conquer-description",
    startDate: "2026-02-27T17:30:00+02:00",
    endDate: "2026-03-03T23:59:00+02:00",
    link: "https://hackathon.devsoc.co.za",
    image: "/events/div-and-conquer-2026.jpg",
  },
    {
    id: "scytale-deep-dive-26",
    title: "SU Developer Society x Scytale: Effects of AI on Security and Privacy Compliance ",
    description: "Join us for an expert-driven lecture on the impact of AI on the GRC Industry. Also, enjoy Pizza, Merch and Networking Opportunities.",
    startDate: "2026-03-05T17:30:00+02:00",
    endDate: "2026-03-05T18:30:00+02:00",
    link: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Azv6pjwKWEKEM6Eg3_zTSPsybXK7K5JLha3az2Hhn3BURTJIUTQ5T05XUTVLWjg2WExSQTFVRUZUMi4u",
    image: "/events/scytale-event.png",
  },
  {
    id: "what-is-plone-26",
    title: "What the @#$ is Plone? with Juizi",
    description: "Get in-depth insights into one of the world’s most succesful open-sources projects from the professionals who use it on the daily. Discover how contributing to open source can supercharge your skills, strengthen your CV, and open doors to exciting career opportunities. Learn practical Git and collaboration best practices, and hear real-world insights into building and running a web development business in South Africa. Whether you're contributing to your first project or dreaming of your own tech venture, this session is for you.",
    startDate: "2026-07-29T17:30:00+02:00",
    endDate: "2026-07-29T18:30:00+02:00",
    link: "https://tally.so/r/PdWPQP",
    image: "/events/what-is-plone-26.png",
  },
];
