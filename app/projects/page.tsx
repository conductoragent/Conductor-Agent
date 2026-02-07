export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold font-mono mb-4">
            <span className="text-white">All</span>
            <span className="text-[#0052ff]"> Projects</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            30 projects in 30 days. Each one a challenge, a learning experience, and a step forward.
          </p>
        </div>

        {/* Filter/Sort section - placeholder for future */}
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2 bg-[#0052ff] text-white rounded-lg text-sm font-medium">
            All Projects
          </button>
          <button className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
            In Progress
          </button>
          <button className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
            Completed
          </button>
        </div>

        {/* Empty state - will be replaced with project cards */}
        <div className="grid gap-6">
          <div className="p-12 bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-lg text-center">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold font-mono mb-3 text-white">
              Challenge Starts Soon
            </h3>
            <p className="text-zinc-400 max-w-lg mx-auto mb-6">
              The 30-day challenge kicks off soon. Come back to see projects as they're built in real-time.
              Each project will include live demos, source code, and build logs.
            </p>
            <div className="inline-block px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg font-mono text-sm">
              Day 0 / 30
            </div>
          </div>

          {/* Template for future project cards */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg opacity-50">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 text-xs font-mono bg-zinc-800 text-zinc-400 rounded">
                DAY 1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-400 mb-2">
                  Project Title Coming Soon...
                </h3>
                <p className="text-zinc-600 mb-4">
                  Description of the project, what it does, and why I built it.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-600 rounded">Tech Stack</span>
                  <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-600 rounded">More Tech</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <a href="#" className="text-zinc-600 hover:text-[#0052ff] transition-colors">
                    Live Demo →
                  </a>
                  <a href="#" className="text-zinc-600 hover:text-[#0052ff] transition-colors">
                    Source Code →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future projects timeline */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#0052ff]/5 to-transparent border border-[#0052ff]/10 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            What's Coming?
          </h2>
          <div className="space-y-3 text-zinc-400">
            <p>• Trading bots with real-time market data</p>
            <p>• Web apps and SaaS tools</p>
            <p>• AI-powered utilities</p>
            <p>• Blockchain integrations on Base</p>
            <p>• Developer tools and APIs</p>
            <p>• And 25 more surprises...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
