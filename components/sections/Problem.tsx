export default function Problem() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
          Your AI Agent Writes Great Code.{' '}
          <span className="text-red-600">But Generic Design.</span>
        </h2>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
          <p className="text-xl mb-6">
            You&apos;ve handed off UI implementation to Cursor or Claude Code, and what comes
            back works—but it&apos;s lifeless. Generic buttons. Inconsistent spacing. Zero brand
            personality. No thought for edge cases or mobile users.
          </p>

          <p className="text-xl text-slate-600">
            The problem isn&apos;t your agent. It&apos;s that it&apos;s designing{' '}
            <strong>blind</strong>—with zero context about your product, users, or design
            language.
          </p>
        </div>

        {/* Visual examples grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Generic Buttons',
              description: 'Default Material UI components with no brand personality',
              icon: '🔘',
            },
            {
              title: 'Inconsistent Spacing',
              description: 'Random gaps and margins that ignore your design system',
              icon: '📏',
            },
            {
              title: 'Forgotten Edge Cases',
              description: 'Missing error states, empty states, and loading indicators',
              icon: '⚠️',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
