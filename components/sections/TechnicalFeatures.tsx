export default function TechnicalFeatures() {
  const features = [
    {
      title: 'MCP Server Integration',
      description:
        'Plugs directly into Claude Code, Cursor, Windsurf, Cline or any tool that supports Model Context Protocol. No workflow disruption.',
    },
    {
      title: 'Living Design System',
      description:
        'Your components, variables, and guidelines stay in sync. Update once, and every future generation reflects the change.',
    },
    {
      title: 'Universal UX Pattern Registry',
      description:
        'Curated collection of interaction patterns with markdown specs and visual references—searchable by use case, not just component name.',
    },
    {
      title: 'Product Context Management',
      description:
        'Define user personas, key workflows, and product strategy once. Design Rails keeps it up to date and accessible for every design decision.',
    },
    {
      title: 'Version Control Friendly',
      description:
        'All specs and context live in markdown that you commit alongside your code.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for How You{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Already Work
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
