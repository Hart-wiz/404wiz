import React from 'react'
import { Cloud, Cpu, Database, Layout } from 'lucide-react'



export default function Expertise() {

    const skills = [
        { title: 'Frontend', icon: Layout, desc: 'React, Vue, Tailwind, TypeScript', color: 'text-[#137fec]' },
        { title: 'Backend', icon: Database, desc: 'Node, Python, Go, GraphQL', color: 'text-[#00f2ff]' },
        { title: 'Cloud', icon: Cloud, desc: 'AWS, Docker, Kubernetes, CI/CD', color: 'text-[#bc13fe]' },
        { title: 'Architecture', icon: Cpu, desc: 'Microservices, DDD, Serverless', color: 'text-[#137fec]' },
      ];
  return (
    <section id="experience" className="px-6 lg:px-40 py-20 bg-white dark:bg-[#101922]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Expertise</h2>
        <p className="text-slate-600 dark:text-slate-400">
          My journey as a developer is built on a foundation of continuous learning and problem-solving. I leverage modern tools to build fast, secure, and accessible products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.title} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-[#283039]">
              <skill.icon className={`${skill.color} mb-2`} size={24} />
              <h4 className="font-bold text-slate-900 dark:text-white">{skill.title}</h4>
              <p className="text-xs text-slate-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-none w-12 h-12 rounded-lg bg-[#137fec]/20 flex items-center justify-center font-bold text-[#137fec]">S</div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Senior Full Stack Developer</h4>
              <p className="text-sm text-slate-500">StackTech Solutions • 2021 - Present</p>
              <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">Leading development of cloud-native enterprise applications.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none w-12 h-12 rounded-lg bg-[#00f2ff]/20 flex items-center justify-center font-bold text-[#00f2ff]">B</div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Web Developer</h4>
              <p className="text-sm text-slate-500">BlueHorizon Digital • 2018 - 2021</p>
              <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">Developed responsive user interfaces for high-traffic startups.</p>
            </div>
          </div>
        </div>
        <button className="w-full sm:w-fit px-8 h-12 rounded-lg bg-[#283039] text-white font-bold hover:bg-slate-700 transition-colors">
          View Full Experience
        </button>
      </div>
    </div>
  </section>
  )
}









