'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Does this replace designers?',
      answer:
        "Design Rails amplifies designers, not replaces them. Think of it as scaling their expertise across your entire engineering team. Designers define the system, patterns, and standards once—Design Rails ensures those decisions get applied correctly every time code is written. This frees designers to work on what humans do best: solving novel UX problems, conducting research, and evolving your design language. Meanwhile, AI handles what AI does best: applying known patterns consistently at scale.",
    },
    {
      question: 'What agents does it work with?',
      answer:
        'Any coding agent that supports MCP: Claude Code, Cursor, Windsurf, Cline, and any VS Code agent extensions.',
    },
    {
      question: 'How do I customize it for my product?',
      answer:
        'Design Rails asks your coding agent to generate a summary of your styles and product based on the code. Your agent creates markdown files that Design Rails uses as context. Everything lives in version-controlled files you can update anytime.',
    },
    {
      question: 'Can I add my own UX patterns?',
      answer:
        'Absolutely. The pattern library is extensible. Add internal patterns your team has developed alongside the universal library.',
    },
    {
      question: 'What if my design system changes?',
      answer:
        'Update your design system config and all future generations immediately reflect the changes. No retraining required.',
    },
    {
      question: 'How detailed are the design specs?',
      answer:
        'Extremely. Layout structure, component choices, spacing, typography, responsive breakpoints, interactive states, error handling, loading states, empty states, accessibility considerations—everything needed for implementation.',
    },
    {
      question: 'Is this open source?',
      answer:
        'You own the markdown files with context of your product, and the design specs that are generated on your behalf. The design spec generator sits behind an MCP and is closed-source.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-300 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
