import WebGLBackground from '../WebGLBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WebGLBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Give Your AI Agent the{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Design Intelligence
          </span>{' '}
          It&apos;s Missing
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Design Rails equips Claude Code, Cursor, and Windsurf with your product context,
          design system, and proven UX patterns, so AI-generated code respects your design
          standards from the first line.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            Install Design Rails in 5 Minutes →
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>

          <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            See How It Works
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
