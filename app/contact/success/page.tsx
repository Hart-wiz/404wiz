import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 pt-10">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 md:py-24">
        <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/50 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Message sent successfully!
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Thanks for reaching out. I’ve received your message and will get
            back to you soon.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Send another message
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
