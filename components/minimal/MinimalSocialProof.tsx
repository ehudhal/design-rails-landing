export default function MinimalSocialProof() {
  const testimonials = [
    {
      quote: 'Design Rails turned our AI agents from code generators into design-aware collaborators. We\'re shipping features 3x faster without sacrificing quality.',
      author: 'Engineering Lead',
    },
    {
      quote: 'As a solo designer supporting 12 engineers, Design Rails lets me define patterns once and trust they\'ll be implemented correctly. I spend my time on user research and complex flows, not reviewing button states.',
      author: 'Designer',
    },
    {
      quote: 'Our design system was gathering dust in Figma. Now it\'s actually enforced in code. Engineers use it because it\'s easier than guessing, and I finally have time to evolve our patterns instead of policing them.',
      author: 'Design System Lead',
    },
    {
      quote: 'The UX pattern library alone is worth it. It\'s like having a design reference library in your agent\'s brain.',
      author: 'Product Lead',
    },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-20 text-center" >
          Trusted by Teams Who Ship Fast
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-teal-300 transition-all duration-300"
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-6" >
                "{testimonial.quote}"
              </p>
              <p className="text-sm font-semibold text-teal-600" >
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
