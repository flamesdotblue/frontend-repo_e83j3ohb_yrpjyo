import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Palette, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'AI Website Builder',
    desc: 'Build sites in seconds from a simple idea.',
    icon: Wand2,
    gradient: 'from-fuchsia-500 to-indigo-500',
  },
  {
    title: 'Smart Brand Generator',
    desc: 'Instantly create logos, colors, and typography.',
    icon: Palette,
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Creative AI Companion',
    desc: 'Get design suggestions, headlines, and layouts on demand.',
    icon: Sparkles,
    gradient: 'from-amber-500 to-pink-500',
  },
];

export default function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
          Everything you need to launch fast
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Combine AI creativity with proven design systems to craft stunning brands in minutes.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
          >
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${f.gradient} text-white shadow-lg shadow-black/10`}>
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-fuchsia-500/10 to-cyan-500/10 blur-2xl transition duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
