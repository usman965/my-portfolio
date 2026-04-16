export const personal = {
  name: "Usman Asghar",
  title: "Software Engineer",
  tagline:
    "React Native, React.js, Next.js & Web3 engineer shipping mobile and web products end to end — from UI to APIs, databases, and production deploys.",
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
  "Web3, dApps, Crypto Mobile Wallets & wallet integrations",
  "Production deploys, domains & HTTPS",
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
      "Production hosting & release",
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
    company: "RapidDev",
    role: "Mobile & Web App Engineer (Full-Stack)",
    period: "Jan 2026 — Present",
    location: "Remote",
    summary:
      "Build mobile and web apps end to end with full ownership of frontend, backend, and production deployment.",
    bullets: [
      "Deliver React Native and Next.js/React.js apps as the primary engineer.",
      "Handle APIs, business logic, and databases across Node.js/Express services.",
      "Own production releases, deployment, and post-release stability improvements.",
    ],
  },
  {
    company: "NexTek Solutions",
    role: "React Native Developer",
    period: "2023 — Dec 2025",
    location: "Lahore, Pakistan",
    summary:
      "Lead mobile delivery for production apps across education, sports, and healthcare — performance, client comms, code review, and mentoring.",
    bullets: [
      "Shipped cross-platform apps with maps, chat, video (Zoom), subscriptions, and Stripe.",
      "Improved app performance, reliability, and release quality across multiple production projects.",
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
      "Built React Native crypto wallet features, including wallet creation, transactions, and chain integrations.",
      "Implemented mobile smart contract calls with WalletConnect for dApp and wallet interactions.",
    ],
  },
];

export const projects = [
  {
    name: "Never Forget It",
    description:
      "Developed Never Forget It (NFI) end-to-end: a location-aware React Native app with subscription billing, a Node.js/Express backend, PostgreSQL database, and production deployment, delivering authentication, item tracking, and nearby-store notification features. iOS is live and Android is currently under review.",
    iosHref: "https://apps.apple.com/us/app/never-forget-it/id6758312855",
    tags: ["React Native", "Node.js", "Express", "PostgreSQL", "Subscriptions"],
    featured: true,
  },
  {
    name: "Generocity",
    description:
      "Built Generocity, a React Native community-sharing app that enables local item donations, claim/offer workflows, and in-app messaging to reduce waste and improve neighborhood support.",
    tags: ["React Native", "Community App", "Messaging"],
  },
  {
    name: "shop-demo",
    description:
      "Proof of Concept full-stack app built with React, Node.js, Express, and PostgreSQL. Live with a custom domain and HTTPS, with end-to-end ownership of build, hosting, and release.",
    href: "https://shop-demo.devusmanasghar.site/",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "HTTPS"],
  },
  {
    name: "Nouview",
    description:
      "Global mentorship platform: Google Maps, Zoom, Firebase, in-app purchases, and Stripe subscriptions.",
    iosHref: "https://apps.apple.com/pk/app/nouview/id6471268450",
    androidHref: "https://play.google.com/store/apps/details?id=com.app.movementor",
    tags: ["React Native", "Maps", "Zoom", "Stripe"],
  },
  {
    name: "SPiN",
    description:
      "Sports networking: profiles, teams, leagues, feeds and chat via GetStream; social login and push notifications.",
    iosHref: "https://apps.apple.com/pk/app/spin-sports-management-tools/id6482974007",
    androidHref: "https://play.google.com/store/apps/details?id=com.spninc.ai",
    tags: ["React Native", "GetStream", "Social auth"],
  },
  {
    name: "Funk Wallet",
    description:
      "Built a mobile crypto wallet with wallet creation, transactions, and blockchain integrations.",
    tags: ["React Native", "Crypto Wallet", "Blockchain"],
  },
  {
    name: "NES Health (Energy4Life)",
    description:
      "Bioenergetic assessment app with BLE devices, audio/FFmpeg processing, flavors, and secure APIs.",
    iosHref: "https://apps.apple.com/pk/app/energy4life/id1482400326",
    androidHref: "https://play.google.com/store/apps/details?id=com.neshealth.energy4Life",
    tags: ["React Native", "BLE", "Audio"],
  },
  {
    name: "Video Editor",
    description:
      "Experimented with video editing capabilities in React Native, focusing on trimming, filters, and transitions.",
    tags: ["React Native", "Video Processing"],
  },
  {
    name: "Hair Recommender (Testing App)",
    description:
      "Built a proof-of-concept app recommending hairstyles using AI-based image recognition. Also worked on backend services and integrated Gemini API for hair analysis and recommendations.",
    tags: ["React Native", "Backend", "Gemini API", "AI"],
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
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];
