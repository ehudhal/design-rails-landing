'use client';

import MinimalWebGLBackground from './MinimalWebGLBackground';

export default function MinimalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MinimalWebGLBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight font-[family-name:var(--font-syne)]">
          Give Your AI Coding Agent the Design Intelligence It's Missing
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-dm-sans)]">
          Design Rails equips Claude Code and Cursor with your product context, design system, and proven UX patterns, so AI-generated code respects your design standards from the first line.
        </p>

        <button className="px-8 py-4 bg-teal-600 text-white rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-[family-name:var(--font-dm-sans)]">
          Install Design Rails in 2 Minutes →
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
