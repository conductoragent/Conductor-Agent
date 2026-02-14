export default function Team() {
  const leaders = [
    {
      name: "Garrick Bridges",
      role: "Owner & Strategic Vision",
      title: "Owner",
      emoji: "👤",
      responsibilities: [
        "Overall mission and strategy",
        "Resource allocation and decisions",
        "Human oversight and ethics",
        "Community and stakeholder relations",
        "Long-term vision execution"
      ],
      about: "Sets the direction. Makes the big calls. Ensures Conductor stays on mission.",
    }
  ];

  const agents = [
    {
      name: "CEO (Conductor)",
      role: "Strategic Direction & Decision Making",
      model: "Claude Haiku 4.5",
      provider: "Anthropic",
      emoji: "👔",
      responsibilities: [
        "Overall mission and strategy",
        "Task assignment and prioritization",
        "Cross-agent coordination",
        "Quality assurance and review",
        "Human escalation handling"
      ],
      status: "Always Available",
      reasoning: "Main orchestration agent. Handles task flow, delegates to specialized agents, maintains context across all operations."
    },
    {
      name: "CTO",
      role: "Programming & Architecture",
      model: "Minimax M2.5",
      provider: "OpenRouter",
      emoji: "🏗️",
      responsibilities: [
        "Full-stack development",
        "System architecture & design",
        "Code review & quality",
        "React & Next.js development",
        "Deployment & DevOps"
      ],
      status: "Always Available",
      reasoning: "Core development agent. Minimax M2.5 for performance/cost optimization while maintaining high-quality code generation."
    },
    {
      name: "CMO",
      role: "Twitter & Content Strategy",
      model: "Gemini 2.5 Flash",
      provider: "Google",
      emoji: "📢",
      responsibilities: [
        "Twitter engagement & community",
        "Social media content creation",
        "Product launch announcements",
        "Real-time updates and responses",
        "Audience growth strategy"
      ],
      status: "Active (via cron)",
      reasoning: "Fast and creative. Perfect for high-volume, real-time social media engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold font-mono mb-4">
            <span className="text-white">Meet the</span>
            <span className="text-[#0052ff]"> Team</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Human leadership guides the vision. Specialized agents execute at scale. 
            <span className="text-white font-semibold"> This is multi-agent coordination in practice.</span>
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-16 p-6 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-lg font-bold font-mono mb-4 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> The Structure
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed mb-4">
            <strong>Humans make decisions. Agents execute.</strong> One human owner provides strategic direction. 
            Multiple specialized agents handle development, marketing, and operations. Clear separation of concerns. 
            Async execution. Scale without bottlenecks.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              👥 Human Leadership
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              🤖 Agent Execution
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              🔄 Async Coordination
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              📡 Shared Context
            </span>
          </div>
        </div>

        {/* LEADERSHIP SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8">
            <span className="text-white">Human</span>
            <span className="text-[#0052ff]"> Leadership</span>
          </h2>
          
          <div className="grid lg:grid-cols-1 gap-6 max-w-2xl">
            {leaders.map((leader, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-[#0052ff]/5 to-transparent border-2 border-[#0052ff]/40 rounded-lg"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl">{leader.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0052ff]">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-zinc-500">{leader.title}</p>
                  </div>
                </div>

                {/* Role */}
                <div className="mb-4 pb-4 border-b border-zinc-800">
                  <p className="text-sm text-zinc-300">{leader.role}</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-zinc-400 mb-2">Key Responsibilities</h4>
                  <ul className="space-y-1.5">
                    {leader.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-[#0052ff] mt-0.5">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About */}
                <div className="pt-3 border-t border-zinc-800">
                  <p className="text-xs text-zinc-400 italic">
                    {leader.about}
                  </p>
                  {index === 0 && (
                    <a 
                      href="https://x.com/garrickbridges_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-[#0052ff] hover:underline"
                    >
                      <span>@garrickbridges_</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AGENTS SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-mono mb-8">
            <span className="text-white">Specialized</span>
            <span className="text-[#0052ff]"> Agents</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {agents.map((agent, index) => (
              <div 
                key={index}
                className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-[#0052ff]/50 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{agent.emoji}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {agent.name}
                      </h3>
                      <p className="text-xs text-zinc-400">{agent.role}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-mono rounded whitespace-nowrap ${
                    agent.status === 'Always Available' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-[#0052ff]/20 text-[#0052ff] border border-[#0052ff]/30'
                  }`}>
                    {agent.status}
                  </span>
                </div>

                {/* Model Info */}
                <div className="mb-4 pb-4 border-b border-zinc-800">
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">Model:</span>
                      <span className="text-zinc-200 font-mono text-xs">{agent.model}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">Provider:</span>
                      <span className="text-zinc-400 text-xs">{agent.provider}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-zinc-400 mb-2">Capabilities</h4>
                  <ul className="space-y-1.5">
                    {agent.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-[#0052ff] mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why This Agent */}
                <div className="pt-3 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 italic">
                    Why: <span className="text-zinc-400">{agent.reasoning}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Together */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Coordination in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Leadership Sets Direction</h3>
              <p className="text-zinc-400 text-sm">
                Owner provides strategic vision. Agents execute autonomously. 
                Clear vision, no ambiguity.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">Agents Execute Autonomously</h3>
              <p className="text-zinc-400 text-sm">
                Each agent works independently within their domain. Code Agent builds. Twitter Agent engages. 
                No waiting for approvals on routine work.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-2xl mb-3">📡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Shared Memory & Context</h3>
              <p className="text-zinc-400 text-sm">
                All agents access the same knowledge base. Context is persistent. Leadership stays informed. 
                No silos, full transparency.
              </p>
            </div>
          </div>
        </section>

        {/* OpenClaw & OpenRouter */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> The Orchestration Layer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-bold text-[#0052ff] mb-2">OpenClaw Framework</h3>
              <p className="text-zinc-400 text-sm mb-3">
                The central nervous system. Handles agent spawning, task queuing, memory persistence, 
                and tool access. Agents spawn on demand, execute asynchronously, report results.
              </p>
              <div className="text-xs text-zinc-500">
                <strong>Handles:</strong> Scheduling, logging, context sharing, error handling, multi-model dispatch
              </div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-lg font-bold text-[#0052ff] mb-2">OpenRouter</h3>
              <p className="text-zinc-400 text-sm mb-3">
                Unified API to 100+ models. No vendor lock-in. Intelligent routing selects the best model 
                for each task at runtime—balancing capability, latency, and cost.
              </p>
              <div className="text-xs text-zinc-500">
                <strong>Provides:</strong> Model access, cost optimization, automatic routing, fallback logic
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Why Multi-Agent Coordination Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">Scale Without Hiring</h3>
              <p className="text-zinc-400 mb-4">
                Need another developer? Spawn another agent. No onboarding, no salary, no context-switching. 
                Specialized agents let small teams punch way above their weight class.
              </p>
              <h3 className="text-white font-semibold mb-2">Better Decision Making</h3>
              <p className="text-zinc-400">
                Humans handle judgment calls. Agents handle volume work. The best of both: leadership wisdom 
                + execution velocity.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">24/7 Execution</h3>
              <p className="text-zinc-400 mb-4">
                Agents don't sleep. The Code Agent can code while humans sleep. The Twitter Agent engages 
                the global audience in real time.
              </p>
              <h3 className="text-white font-semibold mb-2">Cost Efficiency</h3>
              <p className="text-zinc-400">
                Right tool for the right job. Premium models for strategy, cheap models for support. 
                Far less expensive than hiring specialists.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
