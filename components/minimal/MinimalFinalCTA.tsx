export default function MinimalFinalCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight" >
          Stop Generating Sloppy UI. Start Shipping Design That Respects Your Standards.
        </h2>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed" >
          Install Design Rails in 1 minute with a single command. Give your AI agents the design intelligence they've been missing.
        </p>

        <button className="px-8 py-4 bg-teal-600 text-white rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-8" >
          Add Design Intelligence to Your Agent
        </button>

        <div className="bg-slate-900 text-slate-100 px-6 py-4 rounded-2xl inline-block">
          <code className="text-sm md:text-base" >
            npm install -g @design-rails/mcp
          </code>
        </div>
      </div>

      {/* Decorative gradient circles */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl -z-0"></div>
    </section>
  );
}
