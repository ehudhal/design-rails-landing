export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Design Rails turned our AI agents from code generators into design-aware collaborators. We're shipping features 3x faster without sacrificing quality.",
      author: 'Engineering Lead',
      company: 'Tech Startup',
    },
    {
      quote:
        "As a solo designer supporting 12 engineers, Design Rails lets me define patterns once and trust they'll be implemented correctly. I spend my time on user research and complex flows, not reviewing button states.",
      author: 'Designer',
      company: 'SaaS Company',
    },
    {
      quote:
        "Our design system was gathering dust in Figma. Now it's actually enforced in code. Engineers use it because it's easier than guessing, and I finally have time to evolve our patterns instead of policing them.",
      author: 'Design System Lead',
      company: 'Enterprise',
    },
    {
      quote:
        "The UX pattern library alone is worth it. It's like having a design reference library in your agent's brain.",
      author: 'Product Lead',
      company: 'B2B Platform',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Teams Who{' '}
            <span className="text-blue-600">Ship Fast</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl text-blue-600 mb-4">&ldquo;</div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
