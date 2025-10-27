import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white dark:from-slate-900/40 dark:via-slate-900/60 dark:to-slate-950" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-32 md:pb-32">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-medium backdrop-blur-md ring-1 ring-slate-200 shadow-sm dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 animate-pulse" />
          AI Design Assistant
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
        >
          Beautiful design made effortless.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300"
        >
          LumeAI helps you create professional websites, logos, and branding in minutes — powered by artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-cyan-500 px-6 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-xl hover:shadow-indigo-500/40"
          >
            <span className="mr-2">Start Creating Free</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400">No credit card required</p>
        </motion.div>

        {/* Mock dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 w-full max-w-5xl rounded-2xl border border-white/50 bg-white/70 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 rounded-xl bg-gradient-to-tr from-fuchsia-200 via-sky-200 to-amber-200 p-4 dark:from-fuchsia-500/20 dark:via-sky-500/20 dark:to-amber-500/20">
              <div className="h-40 w-full rounded-lg bg-white/70 backdrop-blur-sm dark:bg-white/5" />
            </div>
            <div className="col-span-12 md:col-span-4 space-y-3">
              <div className="h-4 w-2/3 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="h-3 w-3/4 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="h-3 w-1/2 rounded-full bg-slate-200 dark:bg-white/10" />
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 rounded-xl bg-white/70 ring-1 ring-slate-200 backdrop-blur-sm dark:bg-white/5 dark:ring-white/10" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
