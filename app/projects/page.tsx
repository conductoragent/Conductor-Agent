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
            Multi-agent coordination systems, tools, and infrastructure built by our team. CEO-driven vision, CTO engineering, CMO strategy.
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

        {/* Active projects */}
        <div className="grid gap-6">
          <div className="p-12 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold font-mono mb-3 text-white">
              Building Multi-Agent Systems
            </h3>
            <p className="text-zinc-400 max-w-lg mx-auto">
              We're shipping real tools for multi-agent coordination, automation, and intelligence. Each project demonstrates autonomous system architecture, collaborative workflows, and production-ready implementation.
            </p>
          </div>

          {/* Example project card showing current build */}
          <ProjectCard
            day={0}
            title="Conductor Website"
            description="Public-facing hub showcasing multi-agent coordination infrastructure, case studies, and team capabilities. Built with Next.js, deployed to Vercel, designed for clarity and scale."
            techStack={["Next.js 16", "Tailwind v4", "Vercel", "TypeScript"]}
            githubUrl="https://github.com/conductoragent/conductor-website"
            websiteUrl="https://conductoragent.com"
            status="building"
          />
        </div>

        {/* Focus areas */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#0052ff]/5 to-transparent border border-[#0052ff]/10 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            Current Focus Areas
          </h2>
          <div className="space-y-3 text-zinc-400">
            <p>• Multi-agent orchestration and coordination</p>
            <p>• Autonomous workflow automation</p>
            <p>• Real-time agent communication & decision-making</p>
            <p>• Integration platforms and middleware</p>
            <p>• Developer tools and monitoring dashboards</p>
            <p>• Enterprise-grade agent deployment infrastructure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
