export interface TechCompany {
  id: string;
  name: string;
  website: string;
  category: "AI" | "Software" | "SaaS" | "Enterprise" | "Startup";
  categoryLabel: string;
  location: string;
  foundedYear?: number;
  founders?: string[];
  headquarters: string;
  specialization: string[];
  description: string;
  targetMarket: string;
  keyProducts: string[];
  source: string;
  sourceUrl?: string;
  lastVerified: string;
  isNexzoa?: boolean;
}

export interface EcosystemStat {
  label: string;
  value: string;
  detail: string;
  source: string;
}

export const ECOSYSTEM_STATS: EcosystemStat[] = [
  {
    label: "Digital Export Target",
    value: "$5 Billion by 2030",
    detail: "National ICT export and digital economy growth roadmap supported by ICTA & SLASSCOM.",
    source: "ICTA / SLASSCOM National Strategic Framework",
  },
  {
    label: "Active Tech Startups",
    value: "600+ Startups",
    detail: "Growing ecosystem across FinTech, AI, SaaS, AgriTech, and Enterprise Software.",
    source: "StartupSL & Lankan Angel Network (LAN) Ecosystem Data",
  },
  {
    label: "Engineering Talent",
    value: "100,000+ ICT Professionals",
    detail: "High-English proficiency engineering workforce with strong tier-1 software architecture pedigree.",
    source: "SLASSCOM National ICT Workforce Survey",
  },
  {
    label: "Startup Funding Growth",
    value: "40% YoY Increase",
    detail: "Accelerated venture capital activity and global seed funding rounds in Sri Lankan digital ventures.",
    source: "StartupBlink / Dealroom South Asia Ecosystem Report",
  },
];

export const SRI_LANKA_TECH_COMPANIES: TechCompany[] = [
  {
    id: "wso2",
    name: "WSO2",
    website: "https://wso2.com",
    category: "Enterprise",
    categoryLabel: "Enterprise Middleware & API Management",
    location: "Colombo, Sri Lanka & Santa Clara, USA",
    headquarters: "Santa Clara, USA / Colombo R&D",
    foundedYear: 2005,
    founders: ["Dr. Sanjiva Weerawarana", "Paul Fremantle"],
    specialization: [
      "API Management",
      "Customer IAM (CIAM)",
      "Integration Platforms (iPaaS)",
      "Enterprise Cloud Solutions",
    ],
    description:
      "WSO2 is a global open-source enterprise technology leader delivering cloud-native API management, integration, and identity and access management platforms powering billions of digital transactions worldwide.",
    targetMarket: "Global",
    keyProducts: ["WSO2 API Manager", "Asgardeo", "Choreo", "WSO2 Identity Server"],
    source: "SLASSCOM Member Directory & Official Company Filings",
    sourceUrl: "https://wso2.com",
    lastVerified: "August 2025",
  },
  {
    id: "virtusa",
    name: "Virtusa",
    website: "https://www.virtusa.com",
    category: "Enterprise",
    categoryLabel: "Digital Engineering & IT Transformation",
    location: "Colombo, Sri Lanka & Southborough, USA",
    headquarters: "Southborough, Massachusetts, USA",
    foundedYear: 1996,
    founders: ["Kris Canekeratne"],
    specialization: [
      "Digital Engineering",
      "Cloud Modernization",
      "AI & Data Analytics",
      "Banking & Healthcare Systems",
    ],
    description:
      "Virtusa is a global provider of digital engineering and IT outsourcing services, with major development and innovation centres located in Colombo supporting Fortune 500 enterprises.",
    targetMarket: "Global",
    keyProducts: ["vLife Life Sciences Platform", "Open Innovation Platform (OIP)", "FinTech Cloud"],
    source: "SLASSCOM Directory & Public Enterprise Profile",
    sourceUrl: "https://www.virtusa.com",
    lastVerified: "August 2025",
  },
  {
    id: "99x",
    name: "99x",
    website: "https://99x.io",
    category: "Software",
    categoryLabel: "Digital Product Engineering",
    location: "Colombo, Sri Lanka & Oslo, Norway",
    headquarters: "Oslo, Norway / Colombo Engineering Hub",
    foundedYear: 2000,
    founders: ["Mano Sekaram"],
    specialization: [
      "Product Engineering",
      "Cloud Native Solutions",
      "SaaS Architecture",
      "Quality Engineering",
    ],
    description:
      "99x is a technology company co-creating digital products with European scaleups, specializing in building high-reliability SaaS platforms and modern web architectures.",
    targetMarket: "Global",
    keyProducts: ["Custom SaaS Engines", "Healthcare Portals", "FinTech Modernization"],
    source: "SLASSCOM Member Showcase & Great Place to Work Reports",
    sourceUrl: "https://99x.io",
    lastVerified: "August 2025",
  },
  {
    id: "rootcode",
    name: "Rootcode",
    website: "https://rootcode.io",
    category: "AI",
    categoryLabel: "AI Engineering & Custom Software",
    location: "Colombo, Sri Lanka & San Francisco, USA",
    headquarters: "Colombo, Sri Lanka",
    foundedYear: 2014,
    founders: ["Alagan Mahalingam"],
    specialization: [
      "Artificial Intelligence Strategy",
      "Custom Software Development",
      "Computer Vision & ML",
      "Mobile Applications",
    ],
    description:
      "Rootcode is an agile technology studio building custom software, machine learning solutions, and design systems for ambitious companies globally.",
    targetMarket: "Global",
    keyProducts: ["Rootcode AI Strategy", "Enterprise Mobile Platforms"],
    source: "SLASSCOM & Official Company Public Profile",
    sourceUrl: "https://rootcode.io",
    lastVerified: "August 2025",
  },
  {
    id: "veracity-ai",
    name: "Veracity AI",
    website: "https://veracityai.com",
    category: "AI",
    categoryLabel: "Agentic AI & Computer Vision",
    location: "Colombo, Sri Lanka & Sydney, Australia",
    headquarters: "Sydney / Colombo",
    specialization: [
      "Agentic AI Systems",
      "Computer Vision",
      "Automated Inspection",
      "Machine Learning Pipelines",
    ],
    description:
      "Veracity AI specializes in AI-native engineering, building autonomous software agents, predictive models, and real-time computer vision applications for industrial and commercial use.",
    targetMarket: "Global",
    keyProducts: ["Veracity Vision Platform", "Custom Intelligent Agents"],
    source: "Industry Research & Public Product Showcase",
    sourceUrl: "https://veracityai.com",
    lastVerified: "August 2025",
  },
  {
    id: "codegen",
    name: "CodeGen International",
    website: "https://codegen.co.uk",
    category: "Enterprise",
    categoryLabel: "TravelTech & Advanced AI Platforms",
    location: "TRACE Expert City, Colombo, Sri Lanka",
    headquarters: "London, UK / Colombo Technology Centre",
    founders: ["Dr. Harsha Subasinghe"],
    specialization: [
      "Travel Automation",
      "Enterprise AI & IoT",
      "Electric Mobility (VEGA)",
      "Autonomous Systems",
    ],
    description:
      "CodeGen International is an enterprise software engineering company behind the world-renowned TravelBox platform, as well as pioneer deep-tech initiatives including Sri Lanka's first all-electric supercar (VEGA Innovations).",
    targetMarket: "Global",
    keyProducts: ["TravelBox Suite", "Review-i (AI NLP)", "Li-Ion Battery Solutions"],
    source: "TRACE Expert City & ICTA Innovation Catalog",
    sourceUrl: "https://codegen.co.uk",
    lastVerified: "August 2025",
  },
  {
    id: "calcey",
    name: "Calcey Technologies",
    website: "https://calcey.com",
    category: "Software",
    categoryLabel: "Agile Software Engineering & SaaS",
    location: "Colombo, Sri Lanka & Silicon Valley, USA",
    headquarters: "Colombo, Sri Lanka",
    foundedYear: 2002,
    founders: ["Mangala Karunaratne"],
    specialization: [
      "Full-Stack Web Development",
      "Mobile Engineering",
      "SaaS Product Development",
      "UI/UX Design",
    ],
    description:
      "Calcey is a boutique software engineering consultancy partnering with Silicon Valley startups, Nordic scaleups, and Australian businesses to engineer scalable digital products.",
    targetMarket: "Global",
    keyProducts: ["PayPal Integration Frameworks", "Freshdesk Plugins", "SaaS MVPs"],
    source: "SLASSCOM & Official Company Website",
    sourceUrl: "https://calcey.com",
    lastVerified: "August 2025",
  },
  {
    id: "fcode-labs",
    name: "Fcode Labs",
    website: "https://fcodelabs.com",
    category: "Software",
    categoryLabel: "Digital Health & Software Development",
    location: "Colombo, Sri Lanka & Singapore",
    headquarters: "Colombo / Singapore",
    foundedYear: 2018,
    specialization: [
      "Digital Health Solutions",
      "Custom Software Development",
      "Cloud Architectures",
      "Machine Learning",
    ],
    description:
      "Fcode Labs is a modern software development firm delivering digital health software, fintech applications, and cloud-native digital systems.",
    targetMarket: "Global & Regional",
    keyProducts: ["MedTech Platforms", "FinTech Dashboards"],
    source: "The Manifest / Clutch Directory & Official Website",
    sourceUrl: "https://fcodelabs.com",
    lastVerified: "August 2025",
  },
  {
    id: "sysco-labs",
    name: "Sysco LABS",
    website: "https://syscolabs.lk",
    category: "Enterprise",
    categoryLabel: "Enterprise Supply Chain & Foodservice Tech",
    location: "Colombo, Sri Lanka",
    headquarters: "Houston, Texas, USA / Colombo Engineering Center",
    specialization: [
      "Enterprise Cloud Transformation",
      "Supply Chain Logistics Software",
      "E-Commerce at Scale",
      "Data Platforms",
    ],
    description:
      "Sysco LABS is the dedicated technology and innovation arm of Sysco (Fortune 500 foodservice leader), engineering high-volume logistics and ordering systems from its Colombo technology hub.",
    targetMarket: "Global",
    keyProducts: ["Sysco Order Ordering Platform", "Delivery Tracking Infrastructure"],
    source: "SLASSCOM & Sysco Corporate Reports",
    sourceUrl: "https://syscolabs.lk",
    lastVerified: "August 2025",
  },
  {
    id: "axiata-digital-labs",
    name: "Axiata Digital Labs",
    website: "https://www.axiatadigitallabs.com",
    category: "Enterprise",
    categoryLabel: "Telco Cloud, AI & Digital Ecosystems",
    location: "Colombo, Sri Lanka",
    headquarters: "Colombo, Sri Lanka & Kuala Lumpur, Malaysia",
    foundedYear: 2019,
    specialization: [
      "Telco APIs (CAMARA)",
      "FinTech & Digital Banking",
      "AI & Data Analytics",
      "Cloud Infrastructure",
    ],
    description:
      "Axiata Digital Labs is the digital transformation and software arm of the Axiata Group, providing carrier-grade cloud architectures, AI analytics, and fintech solutions across Asia.",
    targetMarket: "Global & Regional",
    keyProducts: ["Axonect Suite", "FinTech Microservices", "Telco API Gateways"],
    source: "Axiata Group Filings & SLASSCOM",
    sourceUrl: "https://www.axiatadigitallabs.com",
    lastVerified: "August 2025",
  },
  {
    id: "orel-it",
    name: "Orel IT",
    website: "https://orelit.com",
    category: "AI",
    categoryLabel: "AI Annotation, Machine Vision & IT Services",
    location: "Colombo, Sri Lanka",
    headquarters: "Colombo, Sri Lanka",
    specialization: [
      "AI Data Annotation",
      "Computer Vision Systems",
      "IT Infrastructure Support",
      "IoT Systems",
    ],
    description:
      "Orel IT is one of Sri Lanka's largest tech employers, providing large-scale machine vision dataset labeling, AI operations support, and smart home IoT systems for global technology leaders.",
    targetMarket: "Global",
    keyProducts: ["Orel Vision Suite", "AI Dataset Labeling"],
    source: "SLASSCOM Export Directory",
    sourceUrl: "https://orelit.com",
    lastVerified: "August 2025",
  },
  {
    id: "purple-software",
    name: "Purple Software",
    website: "https://purple.lk",
    category: "AI",
    categoryLabel: "AI Digital Staff & Workflow Automation",
    location: "Colombo, Sri Lanka",
    headquarters: "Colombo, Sri Lanka",
    specialization: [
      "AI Digital Workers",
      "Business Process Automation",
      "ERP Integrations",
      "Customer Experience AI",
    ],
    description:
      "Purple Software builds intelligent digital staff and automated software agents designed to automate administrative tasks, customer communications, and back-office operations.",
    targetMarket: "Sri Lanka & Regional",
    keyProducts: ["AI Digital Employee Platform", "Workflow Hub"],
    source: "Official Company Portal & ICTA Tech Directory",
    sourceUrl: "https://purple.lk",
    lastVerified: "August 2025",
  },
  {
    id: "pickme",
    name: "PickMe (Digital Mobility Solutions)",
    website: "https://pickme.lk",
    category: "Startup",
    categoryLabel: "Mobility, Logistics & Food Delivery Tech",
    location: "Colombo, Sri Lanka",
    headquarters: "Colombo, Sri Lanka",
    foundedYear: 2014,
    founders: ["Jiffry Zulfer"],
    specialization: [
      "Ride Hailing Infrastructure",
      "Logistics Dispatch Engines",
      "Real-time Geolocation Systems",
      "Mobile Payments",
    ],
    description:
      "PickMe is one of Sri Lanka's most successful tech startup success stories (listed on the Colombo Stock Exchange), building real-time dispatch, route optimization, and digital payment infrastructure.",
    targetMarket: "Sri Lanka",
    keyProducts: ["PickMe App", "PickMe Food", "PickMe Flash Logistics"],
    source: "ICTA Spiralation Alumni & Colombo Stock Exchange Disclosures",
    sourceUrl: "https://pickme.lk",
    lastVerified: "August 2025",
  },
  {
    id: "roar-global",
    name: "Roar Global",
    website: "https://roarglobal.com",
    category: "Startup",
    categoryLabel: "AdTech & Digital Media Networks",
    location: "Colombo, Sri Lanka & Singapore",
    headquarters: "Singapore / Colombo",
    foundedYear: 2014,
    founders: ["Mustafa Kassim"],
    specialization: [
      "Media Technology",
      "Digital Advertising Ecosystems",
      "Content Creation Technologies",
      "Audience Analytics",
    ],
    description:
      "Roar Global is a digital media and adtech company operating content networks across South Asia and partnering with major global technology platforms.",
    targetMarket: "Regional & Global",
    keyProducts: ["Roar Media Network", "Roar Digital Marketing Platform"],
    source: "StartupSL & Dealroom South Asia Directory",
    sourceUrl: "https://roarglobal.com",
    lastVerified: "August 2025",
  },
  {
    id: "nexzoa",
    name: "Nexzoa",
    website: "https://www.nexzoa.dev",
    category: "AI",
    categoryLabel: "AI-Native Software Engineering & SaaS Studio",
    location: "Colombo, Sri Lanka",
    headquarters: "Colombo, Sri Lanka",
    foundedYear: 2024,
    specialization: [
      "AI Software Engineering",
      "Custom SaaS Development",
      "AI Workflow Automation",
      "Full-Stack Web Architectures",
    ],
    description:
      "Nexzoa is an independent Sri Lankan software studio building custom AI-native software, enterprise SaaS platforms, and operational automation workflows for ambitious businesses worldwide.",
    targetMarket: "Global & Regional",
    keyProducts: [
      "Custom LLM Pipelines",
      "Multi-tenant SaaS Engines",
      "Intelligent Business Workflows",
    ],
    source: "Official Publisher - nexzoa.dev",
    sourceUrl: "https://www.nexzoa.dev",
    lastVerified: "August 2025",
    isNexzoa: true,
  },
];

export const CATEGORY_DETAILS = {
  all: {
    title: "Sri Lanka Technology Companies & Startups Directory",
    description:
      "Explore verified software companies, AI development studios, SaaS platforms, and emerging tech startups across Sri Lanka's growing digital innovation ecosystem.",
    heading: "Sri Lanka Technology Companies & Startups",
  },
  ai: {
    title: "AI Companies in Sri Lanka - Guide & Directory",
    description:
      "A comprehensive directory of Artificial Intelligence companies, machine learning studios, agentic AI developers, and computer vision specialists based in Sri Lanka.",
    heading: "AI & Machine Learning Companies in Sri Lanka",
  },
  software: {
    title: "Software Development Companies in Sri Lanka",
    description:
      "Leading custom software development companies, agile engineering consultancies, and digital product studios in Sri Lanka.",
    heading: "Software Development Companies in Sri Lanka",
  },
  saas: {
    title: "SaaS Companies in Sri Lanka",
    description:
      "Innovative Software-as-a-Service (SaaS) creators, cloud platform developers, and multi-tenant application engineering teams in Sri Lanka.",
    heading: "SaaS & Cloud Software Companies in Sri Lanka",
  },
  startups: {
    title: "Sri Lankan Startups & Tech Innovation Ecosystem",
    description:
      "Emerging technology startups, venture-backed companies, and high-growth digital ventures born in the Sri Lankan startup ecosystem.",
    heading: "Technology Startups & Emerging Ventures in Sri Lanka",
  },
};
