import React from "react";

const certifications = [
  {
    title: "ALX Backend Software Engineer",
    issuer: "ALX Africa",
    badge: "Professional Certification",
  },
  {
    title: "Frontend Software Engineer",
    issuer: "IGhub Africa",
    badge: "Professional Certification",
  },
  {
    title: "AI Essentials ALX",
    issuer: "ALX Africa",
    badge: "Professional Certification",
  },
  {
    title: "Professional Foundations ALX",
    issuer: "ALX Africa",
    badge: "Professional Certification",
  },
  {
    title: "Medical Lab Scientist (MLSCN)",
    issuer: "Medical Laboratory Science Council",
    badge: "Professional Certification",
  },
  {
    title: "Bachelor of Medical Laboratory Science (BMLS)",
    issuer: "Medical Laboratory Science",
    badge: "Academic Qualification",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 lg:px-40 py-20 bg-slate-50 dark:bg-[#0b1218]"
    >
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex flex-col gap-3 max-w-2xl">
          <p className="uppercase text-sm tracking-[0.3em] text-[#137fec] font-bold">
            Certifications
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Verified skills and professional credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
            I combine strong backend engineering, AI foundations, and medical
            laboratory expertise to deliver high-quality, reliable software and
            data-driven solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="rounded-3xl border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111827] p-6 shadow-sm shadow-slate-200/40 dark:shadow-black/20 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
              {cert.badge}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white leading-snug">
              {cert.title}
            </h3>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
