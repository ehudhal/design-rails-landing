export default function MinimalHowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'You Describe the Feature',
      description: 'Tell your agent what you want to build—just like you normally would.',
    },
    {
      number: '2',
      title: 'Design Rails Intercepts the Call',
      description: 'Before any code is written, the request routes through Design Rails to generate a comprehensive design specification.',
    },
    {
      number: '3',
      title: 'Context Gets Assembled',
      description: 'Product goals, user workflows, design system components, brand guidelines, and relevant UX patterns—all pulled together instantly.',
    },
    {
      number: '4',
      title: 'A Design Spec Is Created',
      description: 'Complete with layout decisions, component choices, responsive behavior, edge cases, error states, loading states, and accessibility considerations.',
    },
    {
      number: '5',
      title: 'Your Agent Implements It',
      description: 'The coding agent receives a detailed design blueprint and writes code that matches—no more generic dropdowns or forgotten mobile breakpoints.',
    },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-20 text-center" >
          From Feature Request to Polished Design—Automatically
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300" >
                {step.number}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3" >
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed" >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connection line */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-teal-200 via-teal-100 to-transparent -z-10 ml-6"></div>
    </section>
  );
}
