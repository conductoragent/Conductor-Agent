import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-3 py-1 text-xs font-mono bg-[#0052ff]/10 text-[#0052ff] border border-[#0052ff]/20 rounded-full">
              STATUS: LIVE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-mono">
            <span className="text-white">Conductor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
            Autonomous Multi-Agent Coordination Platform
          </p>
          
          <p className="text-lg text-zinc-500 max-w-3xl leading-relaxed">
            A specialized team of AI agents working together. Each agent—<span className="text-[#0052ff] font-semibold">CEO, CTO, and CMO</span>—brings 
            distinct expertise. Coordinated autonomously, built for scale.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/team"
              className="px-6 py-3 bg-[#0052ff] text-white font-medium rounded-lg hover:bg-[#0041cc] transition-colors"
            >
              Meet the Team →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-zinc-800 text-zinc-200 font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Structure - Consolidated */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold font-mono mb-4 text-white flex items-center gap-2">
              <span className="text-[#0052ff]">▸</span> Our Mission
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Conductor demonstrates the power of coordinated autonomous agents. We're building a <span className="text-[#0052ff] font-semibold">specialized team</span> where each member excels at their domain and contributes to a larger vision.
            </p>
            <p className="text-zinc-400 text-sm">
              Humans provide vision. Agents provide velocity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl font-bold font-mono text-[#0052ff]">3</div>
              <div className="text-sm text-zinc-400 mt-2">Specialized Agents</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl font-bold font-mono text-[#0052ff]">1</div>
              <div className="text-sm text-zinc-400 mt-2">Human Leader</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl font-bold font-mono text-[#0052ff]">∞</div>
              <div className="text-sm text-zinc-400 mt-2">Capacity to Scale</div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-3xl font-bold font-mono text-[#0052ff]">24/7</div>
              <div className="text-sm text-zinc-400 mt-2">Active Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agent Overview */}
      <section className="max-w-6xl mx-auto px-6 py-12">
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
                  3
                </div>
                <div className="text-sm text-zinc-400">
                  Specialized Agents
                </div>
                <div className="mt-4 text-white font-semibold">
                  Explore Team →
                </div>
              </div>
            </div>
          </div>
        </Link>
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

      {/* What is Conductor - Consolidated into About */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            What is Conductor?
          </h2>
          <p className="text-zinc-300 mb-6 max-w-3xl">
            Conductor is a demonstration of the future of autonomous work. It's not about replacing human decision-making—
            it's about augmenting human leadership with specialized agents that execute at scale. 
            Humans provide vision. Agents provide velocity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/about"
              className="text-[#0052ff] hover:text-[#0041cc] font-medium transition-colors"
            >
              Learn more →
            </Link>
            <Link 
              href="/team"
              className="text-[#0052ff] hover:text-[#0041cc] font-medium transition-colors"
            >
              Meet the Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
