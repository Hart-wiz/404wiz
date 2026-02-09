import React from 'react'
import { 
    Terminal, 
    ArrowRight, 
    ExternalLink, 
    Code, 
    Github, 
    Mail, 
    Share2, 
    Database, 
    Cloud, 
    Layout, 
    Cpu,
    Linkedin,
    Twitter
  } from 'lucide-react';
  

export default function Footer() {
  return (
    <div><footer className="border-t border-slate-200 dark:border-[#283039] bg-white dark:bg-[#101922] py-12 px-6 lg:px-40">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="text-[#137fec]" size={24} />
          <span className="font-bold text-lg text-slate-900 dark:text-white">DevPortfolio</span>
        </div>
        <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
          Designing and developing digital products that matter. Available for freelance projects.
        </p>
      </div>
      <div className="flex gap-6">
        {[
          { icon: Github, href: '#' },
          { icon: Mail, href: '#' },
          { icon: Linkedin, href: '#' },
          { icon: Twitter, href: '#' }
        ].map((social, idx) => (
          <a key={idx} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#137fec] hover:text-white transition-all" href={social.href}>
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-[#283039] text-center text-xs text-slate-500">
      © {new Date().getFullYear()} DevPortfolio. Built with Next.js, Tailwind CSS and Inter.
    </div>
  </footer></div>
  )
}

  