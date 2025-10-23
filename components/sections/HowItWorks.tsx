export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'You Describe the Feature',
      description: 'Tell your agent what you want to build—just like you normally would.',
    },
    {
      number: '2',
      title: 'Design Rails Intercepts the Call',
      description:
        'Before any code is written, the request routes through Design Rails to generate a comprehensive design specification.',
    },
    {
      number: '3',
      title: 'Context Gets Assembled',
      description:
        'Product goals, user workflows, design system components, brand guidelines, and relevant UX patterns—all pulled together instantly.',
    },
    {
      number: '4',
      title: 'A Design Spec Is Created',
      description:
        'Complete with layout decisions, component choices, responsive behavior, edge cases, error states, loading states, and accessibility considerations.',
    },
    {
      number: '5',
      title: 'Your Agent Implements It',
      description:
        'The coding agent receives a detailed design blueprint and writes code that matches—no more generic dropdowns or forgotten mobile breakpoints.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            From Feature Request to Polished Design—
            <span className="text-blue-600">Automatically</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right md:even:text-left">
                  <div
                    className={`p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 ${
                      idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Number badge */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/50">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
