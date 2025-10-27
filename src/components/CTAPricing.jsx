import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'LumeAI saved me weeks of design work — my site was live in a day.',
    name: 'Amara K.',
    title: 'Founder, Velo Studio',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: 'Our brand and website were generated in minutes. It looks premium.',
    name: 'Jon S.',
    title: 'CEO, Northpeak Labs',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    quote: 'The AI companion nails great headlines and layouts. Game changer.',
    name: 'Priya N.',
    title: 'Indie Maker',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Get started with core AI features and templates.',
    features: ['AI website drafts', 'Logo + color suggestions', 'Basic exports'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    desc: 'For creators who want more control and polish.',
    features: ['Advanced branding', 'Unlimited projects', 'Custom domains', 'High‑res exports'],
    highlight: true,
  },
  {
    name: 'Business',
    price: '$49',
    desc: 'Collaborate with teams and ship faster.',
    features: ['Team collaboration', 'Brand kits', 'Priority support', 'Export to Figma/Webflow'],
    highlight: false,
  },
];

export default function CTAPricing() {
  return (
    <section id="get-started" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Testimonials */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Loved by founders and creators
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Early adopters are shipping faster with AI-powered design.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700 dark:text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.title}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Pricing */}
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">Start Free. Upgrade Anytime.</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Pick a plan that scales with your ambition.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-slate-900/60 ${
                p.highlight ? 'border-transparent bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-cyan-500/10 ring-1 ring-fuchsia-400/30 dark:ring-fuchsia-400/20' : 'border-slate-200/80 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h4>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{p.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  p.highlight
                    ? 'bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900'
                }`}
              >
                Try LumeAI Now
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 rounded-2xl border border-slate-200/80 bg-white p-8 dark:border-white/10 dark:bg-slate-900">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-xl font-extrabold bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">LumeAI</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Design faster with AI that understands your brand.</p>
              <form className="mt-4 flex gap-2">
                <input type="email" placeholder="Your email" className="w-full rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400 dark:border-white/10 dark:bg-slate-800" />
                <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900">Subscribe</button>
              </form>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Follow</div>
              <div className="mt-3 flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0015.5 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.98A12.14 12.14 0 013 5.15a4.28 4.28 0 001.33 5.72c-.62-.02-1.2-.19-1.71-.47v.05c0 2.08 1.48 3.82 3.45 4.22-.36.1-.75.15-1.15.15-.28 0-.55-.03-.81-.08.55 1.73 2.15 2.99 4.05 3.03A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.17 0-.19 0-.39-.01-.58A8.66 8.66 0 0024 5.5a8.5 8.5 0 01-2.54.7z"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.02H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.1 22 12.07z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19 3A2.94 2.94 0 0122 6v12a2.94 2.94 0 01-3 3H5a2.94 2.94 0 01-3-3V6a2.94 2.94 0 013-3zm-2.54 8.46a3.5 3.5 0 00-3.5-3.5 3 3 0 00-2.61 1.42V8H7v10h3.35v-5.21a2 2 0 012-2A1.87 1.87 0 0114 11a1.9 1.9 0 01.46 1.29V18H18v-6.54zM8.7 6.5a1.75 1.75 0 10-1.75 1.75A1.75 1.75 0 008.7 6.5z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            <p>© {new Date().getFullYear()} LumeAI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Privacy Policy</a>
              <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Terms</a>
              <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
