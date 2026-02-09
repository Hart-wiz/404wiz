"use client"
import React, { useState, useEffect } from 'react';
import { 
 
  ArrowRight, 

} from 'lucide-react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Expertise from '@/components/Expertise';

/**
 * CUSTOM STYLES
 * Replicating the custom CSS from the original HTML
 */
// const CustomStyles = () => (
//   <style dangerouslySetInnerHTML={{ __html: `
//     :root {
//       --primary: #137fec;
//       --accent-cyan: #00f2ff;
//       --accent-purple: #bc13fe;
//       --bg-dark: #101922;
//       --bg-light: #f6f7f8;
//     }
//     .neon-glow-cyan {
//       text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
//     }
//     .neon-border-cyan {
//       box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
//     }
//     @keyframes pulse-custom {
//       0%, 100% { opacity: 1; }
//       50% { opacity: 0.4; }
//     }
//     .animate-pulse-cyan {
//       animation: pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//     }
//   `}} />
// );

// --- Sub-components ---




/**
 * MAIN APP COMPONENT
 */
export default function App() {
  const projects = [
    {
      title: "E-commerce Engine",
      description: "Scalable backend with microservices architecture handling over 10k requests per minute.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: [
        { name: "React", color: "bg-[#137fec]/10 text-[#137fec]" },
        { name: "Node.js", color: "bg-[#00f2ff]/10 text-[#00f2ff]" },
        { name: "AWS", color: "bg-[#bc13fe]/10 text-[#bc13fe]" }
      ]
    },
    {
      title: "Nexus Chat",
      description: "Real-time collaboration platform featuring end-to-end encryption and voice rooms.",
      img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
      tags: [
        { name: "Next.js", color: "bg-[#137fec]/10 text-[#137fec]" },
        { name: "Socket.io", color: "bg-[#00f2ff]/10 text-[#00f2ff]" },
        { name: "Redis", color: "bg-[#bc13fe]/10 text-[#bc13fe]" }
      ]
    },
    {
      title: "DataSight V2",
      description: "Advanced analytics dashboard for visualising complex financial datasets with high-speed rendering.",
      img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
      tags: [
        { name: "Python", color: "bg-[#137fec]/10 text-[#137fec]" },
        { name: "D3.js", color: "bg-[#00f2ff]/10 text-[#00f2ff]" },
        { name: "PostgreSQL", color: "bg-[#bc13fe]/10 text-[#bc13fe]" }
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#137fec]/30 bg-[#f6f7f8] dark:bg-[#101922] transition-colors duration-300">
      {/* <CustomStyles /> */}
      
    
      
      <main className="flex-1">
        <Hero />
        
        {/* Featured Projects */}
        <section id="projects" className="px-6 lg:px-40 py-20 bg-slate-50 dark:bg-[#0c141b]">
          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
              <div className="h-1 w-20 bg-[#00f2ff] rounded-full"></div>
            </div>
            <a className="text-[#137fec] font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              View All Projects <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
              <ProjectCard key={idx} {...p} />
            ))}
          </div>
        </section>

        <Expertise />
      </main>

    </div>
  );
}