export type SocialLink = {
  href: string;
  iconClass: string;
  label: string;
  targetBlank?: boolean;
};

export type NavItem =
  | { type: "link"; label: string; href: string; iconClass: string }
  | {
      type: "dropdown";
      label: string;
      href?: string;
      iconClass: string;
      children: Array<{ label: string; href: string }>;
    };

export type PortfolioItem = {
  id: string;
  title: string;
  categoryLabel: string;
  year: string;
  description: string;
  image: string;
  filterKey: string;
  externalUrl?: string;
  detailsPath: string;
  gallery?: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  avatar: string;
};

export const siteProfile = {
  name: "Amanuel Temesgen",
  role: "Fullstack & Mobile Developer",
  location: "Addis Ababa, Ethiopia",
  email: "amanueltemesgen62@gmail.com",
  phone: "+251940969172",
  profileImageHeader: "/assets/img/profile/pic.jpg",
  profileImageAbout: "/assets/img/profile/pic.jpg",
  heroImage: "/assets/img/profile/profile-square-13.jpg",
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/amanuel-temesgen-b05a23316/",
    iconClass: "bi bi-linkedin",
    label: "LinkedIn",
    targetBlank: true,
  },
  {
    href: "https://github.com/Edlawit21",
    iconClass: "bi bi-github",
    label: "GitHub",
    targetBlank: true,
  },
  {
    href: "https://instagram.com/your_username",
    iconClass: "bi bi-instagram",
    label: "Instagram",
    targetBlank: true,
  },
  {
    href: "https://t.me/@edl_b21",
    iconClass: "bi bi-telegram",
    label: "Telegram",
    targetBlank: true,
  },
];

export const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/#hero", iconClass: "bi bi-house" },
  { type: "link", label: "About", href: "/#about", iconClass: "bi bi-person" },
  {
    type: "link",
    label: "Resume",
    href: "/#resume",
    iconClass: "bi bi-file-earmark-text",
  },
  {
    type: "link",
    label: "Portfolio",
    href: "/#portfolio",
    iconClass: "bi bi-images",
  },
  {
    type: "link",
    label: "Services",
    href: "/#services",
    iconClass: "bi bi-hdd-stack",
  },
  {
    type: "dropdown",
    label: "Dropdown",
    iconClass: "bi bi-menu-button",
    children: [
      { label: "Dropdown 1", href: "/#" },
      { label: "Dropdown 2", href: "/#" },
      { label: "Dropdown 3", href: "/#" },
      { label: "Dropdown 4", href: "/#" },
    ],
  },
  {
    type: "link",
    label: "Contact",
    href: "/#contact",
    iconClass: "bi bi-envelope",
  },
];

export const portfolioFilters = [
  { key: "*", label: "All Work" },
  { key: "branding", label: "Branding" },
  { key: "web", label: "Web Design" },
  { key: "photography", label: "Photography" },
  { key: "print", label: "Print Design" },
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "eshop-website",
    title: "Eshop Website",
    categoryLabel: "Eshop",
    year: "2024",
    description:
      "Developed a full-stack e-commerce platform using Java, Spring Boot, and React, featuring secure payment processing, inventory management, and responsive design for seamless user experience.",
    image: "/assets/img/portfolio/portfolio-3.jpg",
    filterKey: "branding",
    externalUrl: "https://eshop-ff20f.web.app/",
    detailsPath: "/portfolio/eshop-website",
    gallery: [
      "/assets/img/portfolio/portfolio-3.jpg",
      "/assets/img/portfolio/portfolio-7.webp",
      "/assets/img/portfolio/portfolio-5.webp",
    ],
  },
  {
    id: "digital-workspace",
    title: "Digital Workspace",
    categoryLabel: "Web Application",
    year: "2024",
    description:
      "Modern web application designed for remote collaboration with intuitive user experience and clean aesthetics.",
    image: "/assets/img/portfolio/portfolio-7.webp",
    filterKey: "web",
    detailsPath: "/portfolio/digital-workspace",
    gallery: [
      "/assets/img/portfolio/portfolio-7.webp",
      "/assets/img/portfolio/portfolio-8.webp",
      "/assets/img/portfolio/portfolio-12.webp",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "sophia",
    quote:
      "Outstanding service quality and innovative solutions have completely transformed our business processes, resulting in enhanced productivity and exceptional customer satisfaction throughout our organization.",
    authorName: "Sophia Martinez",
    authorRole: "Operations Director",
    authorCompany: "TechVision Corp",
    avatar: "/assets/img/person/person-f-12.webp",
  },
  {
    id: "michael",
    quote:
      "Professional expertise and dedicated support have significantly improved our project delivery timelines while maintaining exceptional quality standards across all our initiatives.",
    authorName: "Michael Anderson",
    authorRole: "Project Manager",
    authorCompany: "InnovateTech Ltd",
    avatar: "/assets/img/person/person-m-14.webp",
  },
  {
    id: "jennifer",
    quote:
      "Strategic collaboration and innovative thinking have enabled remarkable digital transformation, leading to increased efficiency and measurable business growth results.",
    authorName: "Jennifer Wilson",
    authorRole: "Digital Strategy Lead",
    authorCompany: "FutureScope Inc",
    avatar: "/assets/img/person/person-f-11.webp",
  },
];
