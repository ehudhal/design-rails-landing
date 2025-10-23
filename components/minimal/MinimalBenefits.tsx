export default function MinimalBenefits() {
  const benefits = [
    {
      title: 'Scale Design Decisions Without Scaling Design Headcount',
      description: 'Your agents stop spinning their wheels on design decisions. Features that used to need design reviews now ship with confidence—maintaining the quality you\'re proud of.',
    },
    {
      title: 'Maintain Consistency Across Your Product',
      description: 'No more franken-UI. Design Rails ensures every new component respects your design system, follows established patterns, and maintains brand coherence.',
    },
    {
      title: 'Use Proven Patterns, Not Generic Defaults',
      description: 'Access to battle-tested patterns from industry leaders means your AI agent taps into collective design wisdom—not just generic Material UI components.',
    },
    {
      title: 'Cover Edge Cases That Always Get Forgotten',
      description: 'Empty states. Error messages. Loading indicators. Mobile layouts. The unglamorous-but-essential details that separate amateur from professional UI.',
    },
    {
      title: 'Extend Designer Thinking Through Every Commit',
      description: 'When designers define your system, patterns, and standards—Design Rails ensures those decisions get applied correctly every time. This frees them to work on novel UX problems, user research, and strategic improvements instead of repetitive component decisions.',
    },
  ];

  return (
    <section className="py-32 bg-[#F5F3EF] relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-20 text-center" >
          What You Get With Design Rails
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight" >
                {benefit.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed" >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-teal-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
