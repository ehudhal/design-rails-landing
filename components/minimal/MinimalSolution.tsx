export default function MinimalSolution() {
  const capabilities = [
    {
      title: 'Product Intelligence',
      description: 'Your agent knows who you\'re building for, your user personas, key workflows, and page structures—not just what to build, but why.',
    },
    {
      title: 'Design System Memory',
      description: 'Component library. Brand guidelines. Typography rules. Color tokens. All synced and accessible so every generated UI stays on-brand.',
    },
    {
      title: 'Pattern Library Access',
      description: '10,000+ proven UX patterns from the best products, including Stripe\'s error states, Linear\'s empty states, and Notion\'s navigation, ready to reference when solving design challenges.',
    },
  ];

  return (
    <section className="py-32 bg-[#F5F3EF] relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" >
            Design Rails: The Context Layer AI Agents Need
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" >
            An MCP server that equips your coding agent with everything a designer would know about your product.
          </p>
        </div>

        <div className="grid gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4" >
                {capability.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed" >
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
