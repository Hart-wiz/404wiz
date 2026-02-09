
import React from 'react'
import { 
    Terminal, 
 
  } from 'lucide-react';

export default function Nav() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#283039] px-6 lg:px-40 py-4 bg-white/80 dark:bg-[#101922]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-10 rounded-xl bg-[#137fec] text-white">
          <Terminal size={20} />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block text-slate-900 dark:text-white">404wiz</h2>
      </div>
      <nav className="flex flex-1 justify-end gap-8 items-center">
        <div className="hidden md:flex items-center gap-9">
          {['Home', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a key={item} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] transition-colors" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#137fec] text-white text-sm font-bold shadow-lg shadow-[#137fec]/20 hover:bg-[#137fec]/90 transition-all">
          <span>Resume</span>
        </button>
      </nav>
    </header>
  )
}



