export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Stop Generating Sloppy UI.
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Start Shipping Design That Respects Your Standards.
          </span>
        </h2>

        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Install Design Rails in 1 minute with a single command. Give your AI agents the design
          intelligence they&apos;ve been missing.
        </p>

        <div className="mb-12">
          <button className="group px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            Add Design Intelligence to Your Agent
          </button>
        </div>

        {/* Code snippet */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <code className="text-cyan-400 font-mono text-lg">
              npm install -g @designrails/mcp-server
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
