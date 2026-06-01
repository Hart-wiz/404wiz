import React from "react";
import { Terminal, Github, Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 py-14 px-6 lg:px-32">
      <div className="grid gap-10 md:grid-cols-[1.7fr_1fr_1fr] items-start">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#137fec] p-3 text-white shadow-lg shadow-[#137fec]/20">
              <Terminal size={24} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Built for impact
              </p>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                404wiz
              </h2>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            I design thoughtful digital experiences and build reliable backend
            systems. Let’s connect on meaningful projects, freelance work, or
            collaboration opportunities.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <p className="font-medium">Email</p>
              <a
                className="block text-slate-900 dark:text-white hover:text-[#137fec]"
                href="mailto:njimoguwisdom@gmail.com"
              >
                njimoguwisdom@gmail.com
              </a>
              <p className="font-medium">Phone</p>
              <a
                className="block text-slate-900 dark:text-white hover:text-[#137fec]"
                href="tel:+2348030890344"
              >
                +234 803 089 0344
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Services
          </p>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>Frontend engineering</li>
            <li>Backend engineering</li>
            <li>API design & integration</li>
            <li>Technical consulting</li>
            <li>Portfolio & product websites</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Follow
          </p>
          <div className="flex gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/Hart-wiz",
                label: "Github",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/wisdomnjimogu",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:njimoguwisdom@gmail.com",
                label: "Email",
              },
              // { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#137fec] hover:bg-[#137fec] hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-[#137fec]"
                aria-label={item.label}
              >
                <item.icon size={18} />
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Available for remote and freelance engagements. Ready to bring your
            next backend or AI project to life.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-200/80 dark:border-slate-800 pt-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} 404wiz. Crafted with precision and care.
      </div>
    </footer>
  );
}
