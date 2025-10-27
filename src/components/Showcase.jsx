import React from 'react';
import { motion } from 'framer-motion';

const mockups = [
  { title: 'SaaS Dashboard', colors: 'from-fuchsia-400 via-indigo-400 to-cyan-400' },
  { title: 'Portfolio', colors: 'from-sky-400 via-cyan-400 to-emerald-400' },
  { title: 'E-commerce', colors: 'from-amber-400 via-pink-400 to-violet-400' },
  { title: 'Landing Page', colors: 'from-indigo-400 via-fuchsia-400 to-rose-400' },
  { title: 'Blog', colors: 'from-teal-400 via-cyan-400 to-blue-400' },
];

function MockCard({ title, colors }) {
  return (
    <div className="group relative aspect-[16/10] w-80 shrink-0 overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-3 backdrop-blur-md shadow-lg dark:border-white/10 dark:bg-slate-900/50">
      <div className={`h-24 w-full rounded-xl bg-gradient-to-tr ${colors} opacity-80`} />
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 w-full rounded bg-white/80 dark:bg-white/10" />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" />
      <div className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">{title}</div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
          From concept to creation in 60 seconds
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Explore AI-generated layouts you can customize instantly.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-10 overflow-hidden"
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {[...mockups, ...mockups].map((m, idx) => (
            <MockCard key={idx} title={m.title} colors={m.colors} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
