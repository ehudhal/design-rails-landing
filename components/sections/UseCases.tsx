export default function UseCases() {
  const useCases = [
    {
      title: 'Fast-Moving Startups',
      description:
        'Ship polished features without hiring a full design team. Get to market faster without sacrificing quality.',
      icon: '🚀',
    },
    {
      title: 'Engineering-Led Teams',
      description:
        'Empower engineers to own full-stack features—with design intelligence built in—while maintaining consistent UX.',
      icon: '⚙️',
    },
    {
      title: 'Design System Guardians',
      description:
        "You've built a comprehensive design system, but adoption is inconsistent. Design Rails enforces your system automatically—engineers follow it because it's the path of least resistance, and you reclaim your time for actual design work.",
      icon: '🎨',
    },
    {
      title: 'Product Refactors',
      description:
        'Rebuilding old features? Design Rails ensures consistency with existing patterns while letting you improve incrementally.',
      icon: '🔄',
    },
    {
      title: 'Remote & Distributed Teams',
      description:
        'Eliminate timezone delays for design reviews. Design specifications generated instantly, anywhere in the world.',
      icon: '🌍',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Perfect For</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
              <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
