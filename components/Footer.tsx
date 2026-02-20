import React from "react";
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
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-slate-200 dark:border-[#283039] bg-white dark:bg-[#101922] py-12 px-6 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="text-[#137fec]" size={24} />
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                404wiz
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs text-center md:text-left flex flex-col">
              Designing and developing digital products that matter. Available
              for freelance projects.
              <div className="pt-5 flex flex-col">
                <span className="font-bold ">call: +2348030890344</span>
                <span className="font-bold">
                  email: njimoguwisdom@gmail.com
                </span>
              </div>
            </p>
          </div>
          <div className="flex gap-6 ">
            {[
              { icon: Github, href: "https://github.com/Hart-wiz" },
              {
                icon: Mail,
                href: "mailto:njimoguwisdom@gmail.com?subject=I%20have%20a%20for%20you",
              },
              { icon: Twitter, href: "#" },
            ].map((social, idx) => (
              <Link
                key={idx}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#137fec] hover:text-white transition-all"
                href={social.href}
                target="_blank"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-[#283039] text-center text-xs text-slate-500">
          © {new Date().getFullYear()} 404wiz. Built with Next.js & Tailwind
          CSS.
        </div>
      </footer>
    </div>
  );
}
