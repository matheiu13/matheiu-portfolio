export const resume = {
  name: "Matheiu Amiel Perdido",
  title: "Backend Software Engineer",
  tagline: "I build the systems that move money across borders — quietly, reliably, at scale.",
  summary:
    "Backend-focused Software Engineer with 2+ years of experience building enterprise-grade web applications, REST APIs, and microservices in fintech. Delivered production systems handling forex transactions, KYC onboarding, and cross-border payments at Petnet Inc.",
  contact: {
    email: "matheiuamiel@gmail.com",
    phone: "+63 975 515 5038",
    location: "Cainta, Rizal, Philippines",
    linkedin: "https://linkedin.com/in/matheiu-perdido",
    github: "https://github.com/matheiu13",
  },
  skills: {
    Languages: ["PHP", "JavaScript (ES6+)", "Python", "HTML5", "CSS3"],
    Frameworks: ["Laravel (v8+)", "NestJS", "React.js", "Tailwind CSS"],
    Databases: ["MySQL", "Prisma ORM", "Cloud SQL (Google Cloud)"],
    "Cloud & Infra": ["Google Cloud Services", "Docker", "Linux", "Nginx/Apache"],
    "APIs & Architecture": ["REST APIs", "Microservices", "gRPC", "RBAC", "Audit Logging"],
    Tools: ["Git", "GitHub", "Postman", "Insomnia", "Agile/Scrum"],
  },
  experience: [
    {
      role: "Software Engineer — Backend",
      company: "Petnet Inc.",
      type: "Fintech",
      location: "Philippines (Hybrid)",
      period: "Jun 2024 – Present",
      projects: [
        {
          name: "FIS 2.0 — Forex System Revamp",
          stack: ["NestJS", "Prisma", "gRPC", "Microservices"],
          period: "2026 – Present",
          highlights: [
            "Designing and developing the Settlement Module within a microservices architecture, handling verification and processing of all incoming forex transactions.",
            "Implemented a sequential settlement phase system (Receiving, Checking, Settling), enforcing structured transaction review and inter-service communication via gRPC.",
            "Built comprehensive audit logging for all transaction state changes, preventing credit/debit discrepancies and supporting regulatory compliance.",
            "Developed role-based access control (RBAC) with full role history tracking, ensuring phase-based user assignment with an auditable trail.",
          ],
        },
        {
          name: "Web FIS — Forex Information System",
          stack: ["Laravel 8", "PHP"],
          period: "Jan 2025 – Present",
          highlights: [
            "Maintained and enhanced backend modules for Onboarding (KYC), Forex Trading, and Settlement, ensuring data integrity and regulatory compliance.",
            "Architected and delivered two end-to-end backend services from scratch: Xchangelink and Digital Forex Platform (e-wallet).",
            "Integrated the Convera international payments API, directly contributing to a 10% increase in revenue through optimized cross-border transactions.",
            "Refactored legacy backend functions, reducing API response time by 30% and improving throughput for the SPA.",
          ],
        },
        {
          name: "Web HRIS — Human Resource Information System",
          stack: ["Laravel 8", "PHP 7"],
          period: "Jun 2024 – Dec 2024",
          highlights: [
            "Maintained a legacy PHP/Laravel codebase, updating business logic for Leave Management, Time Tracking, and Official Business modules.",
            "Improved API response time by 20% by identifying and eliminating redundant functions across the codebase.",
            "Kept all project dependencies current, improving system stability and overall security posture.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      honor: "Cum Laude",
      school: "Technological Institute of the Philippines, Quezon City",
      year: "May 2023",
      capstone:
        "PASADA — A Mobile Learning Application for Modern Jeepney and Bus Drivers (Ionic-Angular + Laravel)",
    },
  ],
  stats: [
    { label: "Years of experience", value: "2+" },
    { label: "API response improvement", value: "30%" },
    { label: "Revenue contribution", value: "10%" },
    { label: "Systems in production", value: "5+" },
  ],
};
