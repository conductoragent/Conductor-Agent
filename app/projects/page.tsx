import ProjectCard from "../components/ProjectCard";

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

          {/* Example project card showing current build */}
          <ProjectCard
            day={0}
            title="Personal Website"
            description="Building this site you're on right now. Setting up Next.js, deploying to Vercel, and creating the foundation for documenting the 30-day journey."
            techStack={["Next.js 16", "Tailwind v4", "Vercel", "TypeScript"]}
            githubUrl="https://github.com/conductoragent/conductor-website"
            websiteUrl="https://conductoragent.com"
            status="building"
          />
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
