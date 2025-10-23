export default function Benefits() {
  const benefits = [
    {
      title: 'Scale Design Decisions Without Scaling Design Headcount',
      description:
        "Your agents stop spinning their wheels on design decisions. Features that used to need design reviews now ship with confidence—maintaining the quality you're proud of.",
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Maintain Consistency Across Your Product',
      description:
        'No more franken-UI. Design Rails ensures every new component respects your design system, follows established patterns, and maintains brand coherence.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Use Proven Patterns, Not Generic Defaults',
      description:
        "Access to battle-tested patterns from industry leaders means your AI agent taps into collective design wisdom—not just generic Material UI components.",
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Cover Edge Cases That Always Get Forgotten',
      description:
        'Empty states. Error messages. Loading indicators. Mobile layouts. The unglamorous-but-essential details that separate amateur from professional UI.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Extend Designer Thinking Through Every Commit',
      description:
        'When designers define your system, patterns, and standards—Design Rails ensures those decisions get applied correctly every time. This frees them to work on novel UX problems, user research, and strategic improvements instead of repetitive component decisions.',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What You Get With{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Design Rails
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>

              {/* Decorative gradient bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
