"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the API call to your backend or form service
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds for demo purposes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 pt-10">
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="flex flex-col gap-5 mb-16 max-w-3xl">
          <h1 className="text-slate-900 text-4xl md:text-5xl font-bold tracking-tight">
            Let's start a conversation.
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed">
            Have a project in mind, a question about my work, or just want to
            say hi? Drop a message below and I'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:njimoguwisdom@gmail.com"
                target="_blank"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
              >
                <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">
                    Email
                  </span>
                  <span className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
                    njimoguwisdom@gmail.com
                  </span>
                </div>
              </a>
              <a
                href="tel:+2348030890344"
                target="_blank"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
              >
                <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">
                    Call
                  </span>
                  <span className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
                    +2348030890344
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200">
                <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">
                    Location
                  </span>
                  <span className="text-sm text-slate-500">
                    Abia state, Nigeria (Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 pt-4 border-t border-slate-200">
              <span className="text-sm font-semibold text-slate-900">
                Connect with me
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-6 h-full min-h-[400px] animate-in fade-in zoom-in duration-500">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 max-w-sm">
                    Thank you for reaching out. I've received your message and
                    will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 animate-in fade-in duration-500"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-bold text-slate-900">
                      Send a Message
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-slate-900"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-12 w-full sm:w-auto sm:px-8 mt-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-[0.98]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
