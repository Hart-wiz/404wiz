"use client";
import React, { useState, useEffect, JSX } from "react";
import {
  Terminal,
  Download,
  History,
  Brain,
  Code,
  Layers,
  Cloud,
  Wrench,
  Globe,
  Mail,
  Share2,
  CheckCircle2,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

// Data Structures
const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Lead Software Engineer",
    company: "JengaTech technologies",
    period: "2025 — Present",
    isCurrent: true,
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&auto=format",
    responsibilities: [
      "Led the architecture and development of a microservices-based financial platform handling over 1M monthly transactions.",
      "Mentored a team of 8 junior and mid-level developers, implementing rigorous code review processes and CI/CD best practices.",
      "Reduced AWS infrastructure costs by 35% through container optimization and serverless migration.",
    ],
  },
  {
    id: 2,
    title: "Senior Software Instructor/Developer",
    company: "Optimum computers",
    period: "2018 — 2021",
    isCurrent: false,
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&auto=format",
    responsibilities: [
      "Developed custom e-commerce solutions for enterprise clients using React, Node.js & AWS, resulting in a 25% increase in client sales within the first 6 months.",
      "Integrated complex third-party APIs including Stripe, Salesforce, and Twilio.",
    ],
  },
  {
    id: 3,
    title: "Jenior Software Fellow",
    company: "IG hub technologies",
    period: "2016 — 2018",
    isCurrent: false,
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&auto=format",
    responsibilities: [
      "As a software fellow, I was responsible for developing and maintaining web applications using python and JavaScript.",
      "Collaborated with cross-functional teams to design and implement new features, ensuring high performance and responsiveness.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: <Code className="w-4 h-4" />,
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "Go",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-4 h-4" />,
    highlighted: ["React.js", "Next.js"],
    skills: ["Node.js", "Express", "NestJS", "Tailwind CSS", "Django", "Redux"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    skills: [
      "AWS (S3, EC2, Lambda)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Design & Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: ["Figma", "Jest", "Postman", "Agile/Scrum"],
  },
];

const NAV_ITEMS = ["Home", "Projects", "Experience", "Contact"];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("Experience");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Experience Item Component
  const ExperienceItem = ({
    exp,
  }: {
    exp: {
      responsibilities: string[];
      isCurrent: boolean;
      company: string;
      logo: string;
      period: string;
      title: string;
    };
  }) => (
    <div className="relative pb-12 last:pb-0 ">
      <div
        className={`absolute -left-[41px] top-0 size-5 rounded-full border-4 ${
          exp.isCurrent
            ? "border-[#f6f7f8] dark:border-[#101922] bg-[#137fec]"
            : "border-[#f6f7f8] dark:border-[#101922] bg-slate-300 dark:bg-slate-700"
        }`}
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-xl font-bold">{exp.title}</h4>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              exp.isCurrent
                ? "bg-[#137fec]/10 text-[#137fec]"
                : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            }`}
          >
            {exp.period}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <div className="size-6 rounded bg-slate-200 dark:bg-slate-700 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800">
            <img
              alt={`${exp.company} Logo`}
              src={exp.logo}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium">{exp.company}</span>
        </div>

        <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {exp.responsibilities.map((item: string, idx: number) => (
            <li key={idx} className="flex gap-2">
              <CheckCircle2
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  exp.isCurrent ? "text-[#137fec]" : "text-slate-400"
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const SkillCard = ({ group }: { group: { title: string; icon: JSX.Element; skills: string[]; highlighted?: string[] } }) => (
    <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#137fec]/30 transition-all duration-300">
      <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="text-[#137fec]">{group.icon}</span>
        {group.title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {group.highlighted?.map((skill: string) => (
          <span
            key={skill}
            className="bg-[#137fec]/10 text-[#137fec] border border-[#137fec]/20 px-3 py-1.5 rounded-lg text-sm font-bold"
          >
            {skill}
          </span>
        ))}
        {group.skills.map((skill: string) => (
          <span
            key={skill}
            className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="pt-20 max-md:pt-10 relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        <main className="max-w-7xl mx-auto w-full px-6 py-12">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
              Experience &{" "}
              <span className="text-[#137fec]">Technical Skills</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
              A comprehensive look at my professional journey building scalable
              applications and the modern technology stack I master.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Side: Timeline Experience */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <History className="text-[#137fec] w-6 h-6" />
                <h3 className="text-xl md:text-2xl font-bold">
                  Work Experience
                </h3>
              </div>

              <div className="relative flex flex-col gap-0 border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8">
                {WORK_EXPERIENCE.map((exp) => (
                  <ExperienceItem key={exp.id} exp={exp} />
                ))}
              </div>
            </div>

            {/* Right Side: Skills Grid */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="text-[#137fec] w-6 h-6" />
                <h3 className="text-xl md:text-2xl font-bold">
                  Technical Proficiencies
                </h3>
              </div>

              <div className="grid gap-6">
                {SKILL_GROUPS.map((group, idx) => (
                  <SkillCard key={idx} group={group} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
