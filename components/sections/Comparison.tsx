export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Manual Design Handoff vs. Design Rails vs.{' '}
            <span className="text-blue-600">Both</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-6 text-left font-semibold text-lg">Manual Handoff Only</th>
                <th className="p-6 text-left font-semibold text-lg">Design Rails Only</th>
                <th className="p-6 text-left font-semibold text-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                  Manual + Design Rails
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Designer reviews every feature',
                  'AI generates with context',
                  'Designers focus on complex problems',
                ],
                [
                  'Bottlenecked on design time',
                  'Fast but needs human oversight',
                  'Fast AND high quality',
                ],
                [
                  'Inconsistent implementation',
                  'Enforced standards',
                  'Standards + strategic thinking',
                ],
                [
                  'Edge cases often forgotten',
                  'Comprehensive coverage',
                  'Complete coverage, validated',
                ],
                ['Slow iteration cycles', 'Rapid iteration', 'Rapid iteration with design refinement'],
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-slate-200">
                  <td className="p-6 text-slate-600">{row[0]}</td>
                  <td className="p-6 text-slate-600">{row[1]}</td>
                  <td className="p-6 font-semibold text-slate-900 bg-blue-50">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
          <p className="text-xl font-semibold">
            <strong>The Optimal State:</strong> Designers define the system and handle complex UX
            challenges. Design Rails scales their expertise across all routine implementations.
          </p>
        </div>
      </div>
    </section>
  );
}
