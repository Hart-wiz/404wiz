import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="px-6 lg:px-40 py-12 pt-30">
      <div className="flex flex-col gap-10 lg:flex-row items-center lg:items-center">
        {/* Headshot with Neon Accent */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#137fec] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full max-w-[420px] aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden neon-border-cyan border border-white/10">
            <img
              alt="Professional headshot"
              className="w-full h-full object-cover"
              src="/wiz-portrait-glass.png"
            />
          </div>
        </div>
        {/* Hero Content */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">
              Building <span className="text-[#137fec]">robust</span> &{" "}
              <span className="text-[#00f2ff] neon-glow-cyan">scalable</span>{" "}
              software solutions
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
              Full Stack Developer Crafting scalable, high-performance
              applications with 5+ years of expertise in seamless user
              experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href={"/projects"}
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#137fec] text-white text-base font-bold shadow-xl shadow-[#137fec]/30 hover:scale-[1.02] transition-transform"
            >
              View Work
            </Link>
            <Link
              href={
                "https://wa.me/+2348030890344?text=Hi%20there!%20I'm%20interested%20in%20your%20development%20services"
              }
              target="_blank"
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-slate-300 dark:border-[#283039] hover:bg-slate-100 dark:hover:bg-[#283039] text-slate-900 dark:text-white text-base font-bold transition-all"
            >
              Contact Me
            </Link>
          </div>
          {/* Quick Stats */}
          <div className="flex gap-8 pt-4 border-t border-slate-200 dark:border-[#283039] justify-center lg:justify-start">
            {[
              { label: "Years Experience", val: "5+" },
              { label: "Projects Completed", val: "40+" },
              { label: "Tech Stacks", val: "12" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.val}
                </p>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
