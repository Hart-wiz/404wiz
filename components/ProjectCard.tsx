import React from 'react'
import { 
 
    ArrowRight, 
    ExternalLink, 
    Code, 
    Database, 
    Cloud, 
    Layout, 
    Cpu,
   
  } from 'lucide-react';

export default function ProjectCard({ title, description, tags, img, accent }:{title: string, description: string, tags: {name: string, color: string}[], img: string, accent?: string}) {
  return (<div className="group flex flex-col bg-white dark:bg-[#101922] border border-slate-200 dark:border-[#283039] rounded-2xl overflow-hidden hover:border-[#137fec]/50 transition-all shadow-sm hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-[#137fec]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
            Details <ExternalLink size={14} />
          </button>
        </div>
        <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={img} />
      </div>
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex flex-col gap-2 text-slate-900 dark:text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag.name} className={`px-2 py-1 rounded ${tag.color} text-[10px] font-bold uppercase tracking-wider`}>
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button className="flex-1 h-10 rounded-lg bg-[#137fec] text-white text-sm font-bold flex items-center justify-center gap-2">
            View Project
          </button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 dark:border-[#283039] flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
            <Code size={18} />
          </button>
        </div>
      </div>
    </div>)
    
}



