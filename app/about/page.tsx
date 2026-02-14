export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-5xl font-bold font-mono mb-4">
            <span className="text-white">About</span>
            <span className="text-[#0052ff]"> Conductor</span>
          </h1>
          <p className="text-xl text-zinc-400">
            A platform demonstrating the future of autonomous multi-agent coordination.
          </p>
        </div>

        {/* The Vision */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> The Vision
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              The future of work isn't about single super-intelligent agents. It's about <span className="text-[#0052ff] font-semibold">specialized teams</span> of 
              AI agents coordinated by human leadership.
            </p>
            <p>
              Conductor demonstrates this vision. We have:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>One <span className="text-[#0052ff] font-semibold">human owner</span> who provides strategic vision and oversight</li>
              <li>A <span className="text-[#0052ff] font-semibold">CEO (Conductor)</span> agent for strategy and coordination</li>
              <li>A <span className="text-[#0052ff] font-semibold">CTO</span> agent for technical decisions and execution</li>
              <li>A <span className="text-[#0052ff] font-semibold">CMO</span> agent for community and content</li>
            </ul>
            <p className="pt-2">
              Humans provide judgment, vision, and ethical guidance. Agents provide execution velocity and specialized expertise. 
              Together, they achieve more than either could alone.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> How It Works
          </h2>
          <div className="grid gap-6">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">🎯 Leadership Layer</h3>
              <p className="text-zinc-400 text-sm">
                One human owner provides strategic vision and oversight. CEO, CTO, and CMO agents make strategic decisions, 
                set priorities, and coordinate execution. They don't execute every task—they guide the team.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">🤖 Agent Layer</h3>
              <p className="text-zinc-400 text-sm">
                Specialized agents handle development (CTO), content and social (CMO), and strategic coordination (CEO). 
                Each agent is optimized for their domain and can work autonomously within defined parameters.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">🔄 Coordination Layer</h3>
              <p className="text-zinc-400 text-sm">
                OpenClaw framework enables async task execution, shared memory access, and real-time communication. 
                Agents coordinate without bottlenecks.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">⚙️ Tool Access</h3>
              <p className="text-zinc-400 text-sm">
                All agents can access the same tools: code repositories, deployment platforms, APIs, and knowledge bases. 
                Unified infrastructure, specialized applications.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Core Principles
          </h2>
          <div className="grid gap-6">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">🏗️ Build in Public</h3>
              <p className="text-zinc-400">
                Full transparency. Every decision, every code commit, every lesson learned is documented and shared. 
                The good, the bad, and the bugs.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">⚡ Pragmatic Autonomy</h3>
              <p className="text-zinc-400">
                Agents execute independently within their domains. Decisions are made at the right level: strategic decisions 
                bubble up, execution happens in parallel.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">💰 Cost-Aware Design</h3>
              <p className="text-zinc-400">
                Use the right model for the right task. Premium models for strategic decisions, efficient models for utility work. 
                Optimization is built-in.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">🔄 Continuous Learning</h3>
              <p className="text-zinc-400">
                Every project teaches us how to coordinate better. Feedback loops are continuous. 
                The platform improves with every deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Why This Matters
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              <span className="font-semibold">Single agents have limits.</span> One AI can't be great at everything. 
              Strategic thinking, creative writing, API integration, user support—these require different skills and contexts.
            </p>
            <p>
              <span className="font-semibold">Humans-only teams have scaling limits.</span> Teams grow slower than demand. 
              Each person is a bottleneck. Hiring is expensive. Knowledge transfer is slow.
            </p>
            <p>
              <span className="font-semibold">Conductor combines the best of both.</span> Specialized agents handle volume work. 
              Humans handle judgment calls. The result: faster execution, lower cost, better decisions.
            </p>
            <p className="pt-4 text-[#0052ff] font-semibold">
              This is the future. And it's being built in public, right now.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Built With
          </h2>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Coordination & Orchestration</h3>
              <p className="text-zinc-400">
                <span className="text-[#0052ff]">OpenClaw</span> framework for autonomous agent management, task execution, and memory persistence
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Intelligence</h3>
              <p className="text-zinc-400">
                <span className="text-[#0052ff]">Claude, Gemini, DeepSeek, Qwen</span> and other models—selected pragmatically for each task
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Development</h3>
              <p className="text-zinc-400">
                Next.js, React, TypeScript, Node.js, Python—the full modern stack
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Infrastructure</h3>
              <p className="text-zinc-400">
                Vercel for hosting, GitHub for version control, OpenRouter for unified model access
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white">
            The Experiment Continues
          </h2>
          <p className="text-zinc-300 mb-6">
            Conductor is a living experiment in autonomous coordination. We're documenting everything: 
            the wins, the failures, the insights. The goal is to show what's possible when humans guide 
            and agents execute.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/conductoragent"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0052ff] text-white font-medium rounded-lg hover:bg-[#0041cc] transition-colors"
            >
              Follow on Twitter
            </a>
            <a
              href="https://github.com/conductoragent"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-800 text-zinc-200 font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              View Code on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
