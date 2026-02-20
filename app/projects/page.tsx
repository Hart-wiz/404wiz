"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Database,
  Cloud,
  Server,
  FileCode2,
  Code2,
  Box,
  DatabaseZap,
  Network,
  Layers,
  Palette,
  MonitorPlay,
  Cpu,
  Bot,
  Sparkles,
  Shield,
  Settings,
  LayoutTemplate,
  FileType2,
  BookOpen,
  FileText,
  ArrowRight,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Quantum Shop",
    category: "Full Stack",
    description:
      "A high-performance e-commerce engine with real-time inventory management and Stripe integration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxvorT8gEaCstq0QomL34p_uD0_3xOGX0fPHpX_pE3NFtlxBmTmpGqEEfSGXAa5ScB0S_Au5DFo0zv7vP9iY9c11sd7NBMNvgx9qDgPA22jpguoXQ431Cdz5jGbX8-_hNGTZOFL_vgF03FA0BRfGpWgAqq-Jt99kvcCROh1PoCL0rx0IRx0yrEnViMXu-JSkJJyouUgcm0CHgaI4EzjY0b2_eB7ist8Drjxaf19055L2g-5WR--uq9u5UIuSHr1vIaa7So0N-0IzY",
    tech: [
      { name: "React", Icon: FileCode2 },
      { name: "Node.js", Icon: Server },
      { name: "AWS", Icon: Cloud },
      { name: "PostgreSQL", Icon: Database },
    ],
    primaryLink: { text: "Live Demo", url: "#" },
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Streamline Analytics",
    category: "Backend",
    description:
      "Distributed data processing pipeline handling over 1M events per minute using Go and Kafka.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqzPk3FgFKA35KBL76NOVN4BjQJencc0FuTUV3b0HYOtisgWhrP_yffK8KOUKJUYXDl2ORWWEuF7a6Kbw_v9geBoL2Kqtqk6BqJeH16_eggeKTSdrkpyUFodViJ_JdgFhXgDkBvI7EvtCbftAtU6dFtIFAFFUL4jBc9VrIIyLmMSZITDZUsHs8C0efV2Yd_OI5YcyaMApecHp5GRM7p52CXZV7Lk8JlNFD_7XiC4phnb_KfG7vueQ1sh-wNa5VminLw7cWjrqHNHQ",
    tech: [
      { name: "Go", Icon: Code2 },
      { name: "Docker", Icon: Box },
      { name: "Redis", Icon: DatabaseZap },
      { name: "Kubernetes", Icon: Network },
    ],
    primaryLink: { text: "Case Study", url: "#" },
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Nexus Social",
    category: "Frontend",
    description:
      "A highly interactive social dashboard with custom gesture support and dynamic theme engine.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP37GNm9Bp_ghqTSr1SJDJQhoNuJ3ujHfKU70z-cAc1jddFa_jgfQjnko1rEP1YC4DnciHkT1zjgzdwLyZ5G0je5cmNgnRTH1fd3cn0uCL7I18Qb9CgLSV4aqmemM8qFDolCuP-BYeHMCuUS-cQw_rCGhEgze7XuJQpnHBrpq-6eDvDAEtaefLuarPq7IsCA6fr6GXeMx7NzPsy_rPO6fJJIjeh-l_YWhgTODtz_boNYSGpezCmZ9RSDkdf3I_uyuJrTFw7-OZxqc",
    tech: [
      { name: "React", Icon: Layers },
      { name: "Tailwind", Icon: Palette },
      { name: "Framer Motion", Icon: MonitorPlay },
    ],
    primaryLink: { text: "Live Demo", url: "#" },
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Neural Tasker",
    category: "Full Stack",
    description:
      "Task management tool using LLMs for automatic categorization and prioritization of workflows.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDagJ9gS8BYnZMy9NDEm-KjvxOr8Gv4rY81F6TiddVnh-C459R3ElrqpskToHzInD5dlZeJuUsBfCFOvv11B6QZZDnY7Q9pEXHQB7BFWc1HuAjjChsEw5HlyK9Cm2FtV1W37OzCNkaww436SlRV4c7xES_HqJVe575nfcXHxu1_Y5tO_9Dk4xYZFW7FxspkcAZekXVfTdb6wW_ON4a2s0t65Ut-70WgutzovdDmL6A7E9Aqov1fZAbZH6Ft_U3kUYKYMN0hKBDm44M",
    tech: [
      { name: "Python", Icon: Cpu },
      { name: "OpenAI", Icon: Bot },
      { name: "Next.js", Icon: Sparkles },
    ],
    primaryLink: { text: "Live Demo", url: "#" },
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Vault Auth",
    category: "Backend",
    description:
      "Zero-knowledge proof authentication microservice designed for maximum security and privacy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8GW9uu8hqoDy-6rvDz6PRkDYofQgO_w1HWMKx5YejOgtK5i_OBS-uQbtmMp8Y2Hz_Il7FYo_eGLxc6mFH7bvvbZlgTwL1GPpOjMI9OnBwV1VhdyxscULxVmLpYvxLgkltku3MUzHmJ-tpyo415VqVpQTgrHQb7-b0PowdP3ScLMN0UiLpS7MFt-52M7pwG9xM1tDwNk6Y7u7mrY4YWfmMbi2BO68r_-oGEy6fofGYwvnyCX_1lFzHDo-yWnyRWtTFeVeEjpnfvNo",
    tech: [
      { name: "Rust", Icon: Shield },
      { name: "Docker", Icon: Box },
      { name: "Terraform", Icon: Settings },
    ],
    primaryLink: { text: "Whitepaper", url: "#" },
    githubUrl: "#",
  },
  {
    id: 6,
    title: "V-Store UI Kit",
    category: "Frontend",
    description:
      "Lightweight, accessible component library built with Vue 3 and TypeScript for enterprise apps.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlk92KzxR5t8NmG5bDS4PNkc1rdyemF1HcPUzOUdBBC1LrpWQRD0uNpoU91mHY9SQ5BTnhJgIKFivgMXiduA6_paax8LmxQvrRPiLew7p_QpNpBWrCbEHWnjWmuR1lLPtxHTqJ_L4dIVJvAG4FUYu-V6vGDkpVH84-a29Tu9zSbeRKoeCdmbKCDKW8YihXD-ON7LVchdpDbFtQymubKZt6Itty-4q942usrM5X4nqfuj3Xm8jA0Tt_UeQfuaY9txD2GJd3bGO33JI",
    tech: [
      { name: "Vue", Icon: LayoutTemplate },
      { name: "TypeScript", Icon: FileType2 },
      { name: "Storybook", Icon: BookOpen },
    ],
    primaryLink: { text: "Documentation", url: "#" },
    githubUrl: "#",
  },
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 pt-10">
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="flex flex-col gap-5 mb-16">
          <h1 className="text-slate-900 text-4xl md:text-5xl font-bold tracking-tight">
            Selected Work
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            A curated collection of my technical explorations, architectural
            case studies, and full-stack software solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex h-9 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-transparent text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="w-full h-32 overflow-hidden bg-slate-100 border-b border-slate-100">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col gap-3">
                {/* Header: Title & Category */}
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-slate-900 text-base font-semibold tracking-tight truncate">
                    {project.title}
                  </h3>
                  <span className="shrink-0 bg-blue-50 text-blue-700 border border-blue-200 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-1">
                  {project.description}
                </p>

                {/* Footer: Tech & Links */}
                <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500">
                    {project.tech.map((t, i) => {
                      const Icon = t.Icon;
                      return (
                        <Icon
                          key={i}
                          className="w-3.5 h-3.5"
                          aria-label={t.name}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                      title="View Code"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.primaryLink.url}
                      className="group/link flex items-center gap-1 text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      Demo
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal CTA Section */}
        <div className="mt-32 flex flex-col items-center text-center gap-8 py-16 px-6 rounded-3xl bg-white border border-slate-200 shadow-sm shadow-slate-200/50">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Let's build something.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              I'm currently available for freelance projects and open to new
              opportunities. Let's discuss how I can help bring your vision to
              life.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <button className="flex h-11 items-center justify-center rounded-full px-8 bg-blue-600 text-white text-sm font-medium transition-transform hover:scale-105 shadow-lg shadow-blue-600/20">
              Get in touch
            </button>
            <button className="flex h-11 items-center justify-center rounded-full px-8 bg-transparent border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-colors">
              View Resume
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
