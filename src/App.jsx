import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTAPricing from './components/CTAPricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60 dark:bg-slate-950/60 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-cyan-500" />
            <span className="text-sm font-bold tracking-tight">LumeAI</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex dark:text-slate-300">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
            <a href="#get-started" className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900">Start Free</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTAPricing />
      </main>
    </div>
  );
}
