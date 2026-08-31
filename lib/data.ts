export const profile = {
  name: "Advay Jariwala",
  location: "Champaign, IL",
  email: "advayj2@illinois.edu",
  tagline: "Building products at the intersection of data, AI, and mobile.",
  youtube: "https://youtube.com/@FutFlicksFC",
};

export const education = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "B.S. Information Sciences + Data Science",
    period: "2026 - Present",
    highlights: [],
  },
  {
    school: "GEMS FirstPoint School, Dubai",
    degree: "A-Levels",
    period: "2026",
    grade: "A, A, A, A, B",
    highlights: [
      "#1 in school for AS-Level results; #2 in school for GCSE results (8 A*s, 1 A, 1 B)",
      "Selected as 1 of 4 students to represent the school across 2 regional mathematics competitions",
      "Volunteered as an event organizer and logistics support for 2 iterations of the regional Dubai Maths Super League",
    ],
  },
];

export const projects = [
  {
    name: "Stakes",
    subtitle: "Social Accountability & Habit-Building App (In Progress)",
    stack: ["React Native", "Expo", "Supabase", "Cloudflare"],
    description:
      "I'm building a mobile app that gamifies habit-building. Users commit to goals with friends, provide daily proof, and if they slip, face a fun, predetermined consequence. It's about leveraging social commitment to make habits stick.",
    bullets: [
      "Designed the product vision, user experience, and architecture from scratch, driving the project independently.",
      "Developed the core iOS application and integrated with Supabase, focusing on robust frontend and backend functionality.",
      "Currently finalizing features and exploring monetization strategies to prepare for launch.",
      "This project has been a deep dive into React Native, Supabase, and mobile application security.",
    ],
  },
  {
    name: "SpecCheck",
    subtitle: "AI Syllabus-Based Learning Tool",
    stack: ["FlutterFlow", "Gemini API"],
    description:
      "An AI study tool that evaluates student knowledge: select an exam board, subject, and topic, write your understanding, and receive granular feedback against official specification standards.",
    bullets: [
      "Designed product flow independently; built the AI evaluation engine to pinpoint misconceptions, missing concepts, and factual errors",
      "Developed and debugged cloud functions and Gemini API integrations to a deployment-ready state",
    ],
  },
  {
    name: "AI Carbon Footprint Calculator",
    subtitle: "Hackathon Project",
    stack: ["Python", "Gemini API"],
    description:
      "An AI-powered carbon footprint calculator co-created during a hackathon, with personalized emission-reduction recommendations.",
    bullets: [
      "Implemented a 25-question lifestyle questionnaire, scoring system, and recommendation engine",
      "Built core application logic and delivered a live demo to hackathon judges",
    ],
  },
  {
    name: "Flowcus",
    subtitle: "Engineering the conditions for deep focus.",
    stack: ["HTML", "CSS", "JavaScript", "Full Stack", "Cognitive Science"],
    description:
      "A full-stack productivity application that applies cognitive science principles to help users deliberately enter a focused flow state when they need to do demanding work.",
    details: {
      problem:
        "Modern productivity tools often focus on managing tasks rather than managing attention. I wanted to explore whether software could help users intentionally create the conditions for deep focus.",
      approach:
        "Flowcus translates principles from cognitive science and human performance into a structured experience designed to reduce distractions, establish attention cues, and progressively engage the user with their task.",
      built:
        "I built the full-stack application using HTML, CSS, and JavaScript, including the underlying product logic, interface, interactions, and flow-state experience.",
      why_it_matters:
        "Technology should expand what humans are capable of doing, not simply automate humans out of the process.",
    },
  },
];

export type Project = (typeof projects)[number];

export const experience = [
  {
    role: "Founder & Creator",
    org: "FutFlicks",
    period: "YouTube - @FutFlicksFC",
    bullets: [
      "Scaled a football-focused YouTube channel from 0 to over 200K subscribers - hitting 100K in just 69 days, accumulating 65.1M+ views and 2.3M+ likes.",
      "Managed end-to-end operations: content strategy, editing, thumbnails, analytics, and scheduling",
      "Analyzed demographics and retention to run iterative experiments on content hooks",
      "Successfully monetized the channel and sustained growth through data-driven iterations",
    ],
    featured: true,
  },
  {
    role: "Deputy Head Boy",
    org: "GEMS FirstPoint School",
    period: "Student Leadership",
    bullets: [
      "Selected via competitive process (essay, campaign video, interview) to represent a student body of several thousand",
      "Launched an ongoing mentorship program pairing seniors with Year 11 students preparing for GCSEs",
      "Executed a month-long values development initiative across the student body",
      "Co-led fundraising campaigns raising over $10,000 for students in need",
    ],
  },
  {
    role: "House Captain",
    org: "GEMS FirstPoint School",
    period: "Student Leadership",
    bullets: [
      "Directed and supported students during school-wide events, including Sports Days and charitable initiatives",
      "Organized and volunteered at student fundraising activities, including charity bake sales",
    ],
  },
];

export const debate = [
  {
    role: "National Team Debater",
    org: "NSDA UAE National Debate Team | WSDC Dev Squad",
    bullets: [
      "Selected following a rigorous three-stage national selection process",
      "Represented the UAE across multiple online international tournaments; Team UAE Captain at NSDA international competition",
      "Ranked ahead of multiple established national-team debaters during first year in the UAE WSDC development squad",
      "7+ years of competitive debate; multiple-time finalist and former 3rd Best Speaker",
    ],
  },
  {
    role: "Onsite Tab Master",
    org: "Debate Tabulation",
    bullets: [
      "Managed tournament logistics and tabulation for local competitions supporting the UAE national team and development circuit",
      "Coordinated with online tabmasters, adjudicators, and onsite judges for conflict-free, on-time ballot submission",
    ],
  },
];

export const community = [
  {
    title: "Vipassana - 7-Day teenagers Course",
    org: "Vipassana Meditation Center",
    role: "Volunteer",
    period: "202X", // To be confirmed
    description: "Committed five days living on-site and volunteering full-time to support the course and its participants.",
  },
  {
    title: "Fundraising & School Events",
    org: "GEMS FirstPoint School",
    role: "Organizer & Participant",
    period: "202X - 202X", // To be confirmed
    description: "Actively organized and participated in bake sales, school shows, and various fundraising activities, helping to raise significant funds for students in need",
    amountRaised: "$10,000+ USD",
  },
  {
    title: "Dubai Maths Super League",
    org: "Regional Competition",
    role: "Volunteer x2",
    period: "202X", // To be confirmed
    description: "Volunteered twice at the Dubai Maths Super League, where I judged competitions, marked student work, provided assistance to participants, and supported overall event logistics.",
  },
  {
    title: "Debate - Judge & Tab Team",
    org: "Local Debate Competitions",
    role: "Judge & Tab Master",
    period: "202X", // To be confirmed
    description: "Contributed to the smooth operation of numerous local debate competitions by serving as a judge and volunteering on the tab team, which also supported fundraising efforts for the UAE national debate team.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    category: "Development",
    items: ["React Native", "Expo", "Supabase", "APIs", "Cloudflare"],
  },
  {
    category: "AI & Integration",
    items: ["Gemini API", "LLM-Assisted Development", "AI Product Integration"],
  },
  {
    category: "Tools",
    items: ["Cursor", "FlutterFlow", "CapCut", "Canva"],
  },
];

export const stats = [
  { value: "200K+", label: "YouTube Subscribers" },
  { value: "2.3M+", label: "Total Likes" },
  { value: "65.1M+", label: "Total Views" },
  { value: "7+", label: "Years Debating" },
  { value: "4", label: "Products Built" },
];