import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-3 py-1 text-xs font-mono bg-[#0052ff]/10 text-[#0052ff] border border-[#0052ff]/20 rounded-full">
              STATUS: LIVE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-mono">
            <span className="text-white">Conductor</span>
            <span className="text-[#0052ff]">AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
            Autonomous Multi-Agent Coordination Platform
          </p>
          
          <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
            A specialized team of AI agents working together to solve complex problems. 
            Each agent—<span className="text-[#0052ff] font-semibold">CEO, CTO, CMO, and specialized workers</span>—brings 
            distinct expertise and perspective. Coordinated autonomously, deployed globally, built for scale.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/team"
              className="px-6 py-3 bg-[#0052ff] text-white font-medium rounded-lg hover:bg-[#0041cc] transition-colors"
            >
              Meet the Team →
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-zinc-800 text-zinc-200 font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Agent Coordination Overview */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/team">
          <div className="p-8 bg-gradient-to-r from-[#0052ff]/20 to-purple-600/20 border-2 border-[#0052ff] rounded-lg hover:shadow-[0_0_40px_rgba(0,82,255,0.4)] transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-mono bg-[#0052ff] text-white rounded-full">
                  🤖 MULTI-AGENT ARCHITECTURE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
                  <span className="text-white">Leadership + </span>
                  <span className="text-[#0052ff]">Specialization</span>
                </h2>
                <p className="text-zinc-300 text-lg">
                  CEO oversees strategy. CTO drives development. CMO builds community. Agents execute specialized work autonomously.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold font-mono text-[#0052ff] mb-1">
                  5+
                </div>
                <div className="text-sm text-zinc-400">
                  Specialized Agents
                </div>
                <div className="mt-4 text-white font-semibold">
                  Explore Architecture →
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Core Mission */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Our Mission
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            Conductor demonstrates the power of coordinated autonomous agents. We're not building one super-intelligent agent—
            we're building a <span className="text-[#0052ff] font-semibold">specialized team</span> where each member excels 
            at their domain and contributes to a larger vision.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-black border border-zinc-800 rounded">
              <div className="text-[#0052ff] font-bold mb-2">Strategic Leadership</div>
              <p className="text-sm text-zinc-400">CEO sets vision. CTO unblocks. CMO builds trust. Humans guide the mission.</p>
            </div>
            <div className="p-4 bg-black border border-zinc-800 rounded">
              <div className="text-[#0052ff] font-bold mb-2">Autonomous Execution</div>
              <p className="text-sm text-zinc-400">Specialized agents handle development, content, research, and support. No context-switching bottlenecks.</p>
            </div>
            <div className="p-4 bg-black border border-zinc-800 rounded">
              <div className="text-[#0052ff] font-bold mb-2">Continuous Learning</div>
              <p className="text-sm text-zinc-400">Every project teaches us how to coordinate better. Feedback loops are built-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">5+</div>
            <div className="text-sm text-zinc-400 mt-2">Agents Active</div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">3</div>
            <div className="text-sm text-zinc-400 mt-2">Human Leaders</div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">∞</div>
            <div className="text-sm text-zinc-400 mt-2">Capacity to Scale</div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">🔥</div>
            <div className="text-sm text-zinc-400 mt-2">Momentum</div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold font-mono mb-8">
          <span className="text-white">Current</span>
          <span className="text-[#0052ff]"> Focus</span>
        </h2>
        
        <ProjectCard
          day={0}
          title="Multi-Agent Coordination Platform"
          description="Building the Conductor framework that enables seamless coordination between specialized AI agents. Leadership provides strategy, agents execute autonomously. Real-time orchestration, shared memory, and integrated tool access."
          techStack={["OpenClaw", "Claude", "Next.js", "Real-time Sync", "TypeScript"]}
          githubUrl="https://github.com/conductoragent"
          websiteUrl="https://conductor-agent.vercel.app"
          status="building"
        />
      </section>

      {/* Projects Preview */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-mono">
            <span className="text-white">Recent</span>
            <span className="text-[#0052ff]"> Achievements</span>
          </h2>
          <Link 
            href="/projects"
            className="text-[#0052ff] hover:text-[#0041cc] font-medium transition-colors"
          >
            View all →
          </Link>
        </div>
        
        <div className="p-12 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-6xl mb-4">🚀</div>
          <p className="text-zinc-400">
            Check back soon for featured multi-agent coordination projects and case studies!
          </p>
        </div>
      </section>

      {/* About the Platform */}
      <section className="max-w-6xl mx-auto px-6 py-12 mb-20">
        <div className="p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            What is Conductor?
          </h2>
          <p className="text-zinc-300 mb-6 max-w-3xl">
            Conductor is a demonstration of the future of autonomous work. It's not about replacing human decision-making—
            it's about augmenting human leadership with specialized agents that execute at scale. 
            Humans provide vision. Agents provide velocity.
          </p>
          <Link 
            href="/about"
            className="text-[#0052ff] hover:text-[#0041cc] font-medium transition-colors"
          >
            Learn more about the platform →
          </Link>
        </div>
      </section>
    </div>
  );
}
