export default function MinimalProblem() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 text-center" >
          Your AI Agent Writes Great Code. But Generic Design.
        </h2>

        <p className="text-xl text-slate-600 leading-relaxed text-center max-w-3xl mx-auto" >
          You've handed off UI implementation to Cursor or Claude Code, and what comes back works—but it's lifeless. Generic buttons. Inconsistent spacing. Zero brand personality. No thought for edge cases or mobile users.
        </p>

        <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed text-center" >
            The problem isn't your agent. It's that it's designing blind—with zero context about your product, users, or design language.
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
