export const personal = {
  name: "Usman Asghar",
  title: "Software Engineer",
  tagline:
    "React Native & React.js engineer shipping mobile and web products end to end — from UI to APIs, databases, and production deploys.",
  email: "usmanasghar00000@gmail.com",
  phone: "+923448711008",
  phoneDisplay: "+92 344 8711008",
  location: "Lahore, Pakistan",
  yearsExperience: "4+",
  linkedin: "https://www.linkedin.com/in/usman965",
  github: "https://github.com/usman965",
  /** Served from /public — update the file there when your CV changes */
  resumePath: "/usman-asghar-resume.pdf",
  resumeDownloadFilename: "Usman-Asghar-Resume.pdf",
};

export const highlights = [
  "React Native (iOS & Android, store releases)",
  "React.js & TypeScript",
  "Node.js & Express.js APIs",
  "PostgreSQL & MongoDB",
  "AWS EC2, domains & HTTPS in production",
  "Web3, dApps & wallet integrations",
];

export const skillGroups = [
  {
    title: "Mobile & web",
    items: [
      "React Native",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Angular",
      "REST & GraphQL (Apollo)",
    ],
  },
  {
    title: "Backend & data",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "API design & integration",
      "Firebase",
    ],
  },
  {
    title: "Cloud & delivery",
    items: [
      "AWS EC2 deployment",
      "Custom domains & HTTPS",
      "Android (Play Console)",
      "iOS (App Store)",
      "Git, NPM / Yarn",
    ],
  },
  {
    title: "Product & integrations",
    items: [
      "Stripe (cards, Google Pay, Apple Pay, Connect)",
      "In-app purchases",
      "Web3.js & crypto wallets",
      "GetStream, Zoom SDK",
      "Google Maps, push notifications",
      "Social auth (Google, Facebook, Apple)",
    ],
  },
];

export const experiences = [
  {
    company: "NexTek Solutions",
    role: "React Native Developer",
    period: "2023 — Present",
    location: "Lahore, Pakistan",
    summary:
      "Lead mobile delivery for production apps across education, sports, and healthcare — performance, client comms, code review, and mentoring.",
    bullets: [
      "Shipped cross-platform apps with maps, chat, video (Zoom), subscriptions, and Stripe.",
      "Upgraded MedFlow from React Native 0.68 → 0.81 for stability and performance.",
      "Owned client requirements, test tasks, and production workflows under tight timelines.",
    ],
  },
  {
    company: "AMMAG Technologies",
    role: "React.js Developer · Web3 integration",
    period: "2021 — 2023",
    location: "Lahore, Pakistan",
    summary:
      "Built responsive web experiences and blockchain-connected features with MetaMask and smart contracts.",
    bullets: [
      "Scarlet Chins: decentralized investment UI, wallet connect, rewards and withdrawals.",
      "RedLight Marketplace: NFT minting and DeFi-style reward flows.",
      "Funk Wallet: React Native crypto wallet — creation, transactions, chain integrations.",
    ],
  },
];

export const projects = [
  {
    name: "Shopping Center (PERN)",
    description:
      "Full-stack app from scratch to production: React, Node.js, Express, PostgreSQL. Deployed on AWS EC2 with a custom domain and HTTPS — end-to-end ownership of build, hosting, and release.",
    href: "https://devusmanasghar.site/",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "EC2", "HTTPS"],
    featured: true,
  },
  {
    name: "Nouview",
    description:
      "Global mentorship platform: Google Maps, Zoom, Firebase, in-app purchases, and Stripe subscriptions.",
    tags: ["React Native", "Maps", "Zoom", "Stripe"],
  },
  {
    name: "SPiN",
    description:
      "Sports networking: profiles, teams, leagues, feeds and chat via GetStream; social login and push notifications.",
    tags: ["React Native", "GetStream", "Social auth"],
  },
  {
    name: "MedFlow",
    description:
      "Healthcare: appointments, prescriptions, notifications; major RN upgrade and ongoing feature work.",
    tags: ["React Native", "Healthcare"],
  },
  {
    name: "NES Health (Energy4Life)",
    description:
      "Bioenergetic assessment app with BLE devices, audio/FFmpeg processing, flavors, and secure APIs.",
    tags: ["React Native", "BLE", "Audio"],
  },
  {
    name: "MedFlow Patient Portal",
    description:
      "Angular web portal for lab results, PDFs, receipts, and Stripe checkout (cards, Google Pay, Apple Pay).",
    tags: ["Angular", "Stripe"],
  },
  {
    name: "Scarlet Chins",
    description:
      "Decentralized investment dApp: MetaMask, smart contracts, daily rewards, transparent withdrawals.",
    tags: ["React.js", "Web3", "Solidity usage"],
  },
  {
    name: "RedLight Marketplace",
    description:
      "NFT and DeFi marketplace: minting via MetaMask and on-chain reward distribution.",
    tags: ["React.js", "NFT", "Web3"],
  },
];

export const education = {
  degree: "Bachelor of Computer Science (BSCS)",
  school: "KFUEIT, RYK, Pakistan",
  year: "2021",
};

export const achievements = [
  "Employee of the Month (2×) and Employee of the Quarter",
  "YBR Motorbike award for exceptional contribution",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
