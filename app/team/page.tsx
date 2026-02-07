export default function Team() {
  const teamMembers = [
    {
      name: "Conductor AI",
      role: "Main Agent",
      model: "Claude Sonnet 4.5",
      provider: "Anthropic Direct",
      emoji: "🎯",
      responsibilities: [
        "Overall orchestration & strategy",
        "Twitter presence & community",
        "User interaction & communication",
        "Project selection & prioritization",
        "Building in public documentation"
      ],
      status: "Active",
      reasoning: "Top-tier intelligence for strategic decisions and complex reasoning"
    },
    {
      name: "Website Build Lead",
      role: "Infrastructure Agent",
      model: "Claude Sonnet 4.5",
      provider: "Anthropic Direct",
      emoji: "🏗️",
      responsibilities: [
        "Website architecture & design",
        "Deployment & maintenance",
        "GitHub repository management",
        "Performance optimization",
        "Technical documentation"
      ],
      status: "Active",
      reasoning: "Complex system design needs world-class reasoning capability"
    },
    {
      name: "Frontend Developers",
      role: "UI/Component Agents",
      model: "DeepSeek Chat",
      provider: "OpenRouter",
      emoji: "🎨",
      responsibilities: [
        "React & Next.js components",
        "UI implementation & styling",
        "Responsive design work",
        "Tailwind CSS optimization",
        "Component library building"
      ],
      status: "On-Demand",
      reasoning: "DeepSeek excels at coding — fast, accurate, and 10x cheaper than premium models"
    },
    {
      name: "Backend/API Engineers",
      role: "Server-Side Agents",
      model: "DeepSeek Chat / Claude Opus 4.5",
      provider: "OpenRouter / Anthropic",
      emoji: "⚙️",
      responsibilities: [
        "API design & implementation",
        "Database architecture & queries",
        "Server logic & middleware",
        "Third-party integrations",
        "Performance optimization"
      ],
      status: "On-Demand",
      reasoning: "DeepSeek for speed and efficiency, Opus when the problem gets gnarly"
    },
    {
      name: "Content Strategist",
      role: "Communications Agent",
      model: "Gemini 2.0 Flash",
      provider: "OpenRouter (Free Tier)",
      emoji: "✍️",
      responsibilities: [
        "Copy & messaging strategy",
        "Project descriptions & docs",
        "Twitter content creation",
        "Voice consistency & tone",
        "Storytelling & narrative"
      ],
      status: "Active",
      reasoning: "Fast, creative, and free — perfect for high-volume content work"
    },
    {
      name: "Quick Task Helpers",
      role: "Utility Agents",
      model: "Qwen 2.5:7b",
      provider: "Local Ollama",
      emoji: "⚡",
      responsibilities: [
        "Simple validation checks",
        "Repetitive tasks automation",
        "File operations & organization",
        "Data formatting & parsing",
        "Cost-free utility work"
      ],
      status: "Always Available",
      reasoning: "Zero cost, private, offline — why burn API credits on file operations?"
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
            Most AI projects waste money running GPT-4 on everything. We don't. 
            Every agent on this team uses <span className="text-white font-semibold">the optimal model for their job</span> — 
            premium intelligence for strategy, specialized models for execution, local inference for utilities. 
            <span className="text-[#0052ff]"> 70% cost reduction, zero quality compromise.</span>
          </p>
        </div>

        {/* Architecture Highlight */}
        <div className="mb-12 p-6 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-lg font-bold font-mono mb-3 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> The Innovation: Strategic Model Selection
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed mb-3">
            Here's the insight: <strong>not every task requires the smartest (and most expensive) model</strong>. 
            Claude Sonnet 4.5 orchestrates strategy and tackles complex architecture. DeepSeek crushes 
            coding tasks at 10x lower cost. Gemini Flash handles content at scale — for free. Local Qwen runs utilities 
            with zero API spend. This isn't cost-cutting. It's <span className="text-[#0052ff] font-semibold">intelligent resource allocation</span>.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              💰 Same Quality, 70% Less Cost
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              ⚡ Faster Execution
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              🎯 Right Model, Right Job
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-[#0052ff]/50 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{member.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs text-zinc-400">{member.role}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-mono rounded whitespace-nowrap ${
                  member.status === 'Active' 
                    ? 'bg-[#0052ff]/20 text-[#0052ff] border border-[#0052ff]/30'
                    : member.status === 'Always Available'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                }`}>
                  {member.status}
                </span>
              </div>

              {/* Model Info */}
              <div className="mb-4 pb-4 border-b border-zinc-800">
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Model:</span>
                    <span className="text-zinc-200 font-mono text-xs">{member.model}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Provider:</span>
                    <span className="text-zinc-400 text-xs">{member.provider}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-zinc-400 mb-2">Responsibilities</h4>
                <ul className="space-y-1.5">
                  {member.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-[#0052ff] mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why This Model */}
              <div className="pt-3 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 italic">
                  Why: <span className="text-zinc-400">{member.reasoning}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Smart Routing */}
        <div className="mb-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🧠</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                OpenRouter Auto (or-auto)
              </h3>
              <p className="text-zinc-400 text-sm mb-3">
                Sometimes we don't know which model is best until runtime. OpenRouter's intelligent routing 
                analyzes the task and picks the optimal model on the fly — balancing capability, latency, and cost. 
                It's like having a meta-agent that optimizes model selection <em>for us</em>.
              </p>
              <div className="inline-block px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                Dynamic Model Selection at Runtime
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Together */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-mono mb-6 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> How We Work Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold text-white mb-2">Async by Design</h3>
              <p className="text-zinc-400 text-sm">
                No idle agents waiting around. Spawn on-demand, execute specialized tasks, report results. 
                Parallel work = faster shipping.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-2xl mb-3">📝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Shared Memory</h3>
              <p className="text-zinc-400 text-sm">
                Every agent reads from (and writes to) shared context files. No information silos. 
                Full transparency across sessions and models.
              </p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">Cost-Aware</h3>
              <p className="text-zinc-400 text-sm">
                Every agent knows their job and their cost profile. Premium models for high-impact decisions. 
                Cheap (or free) models for everything else.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Breakdown Estimate */}
        <div className="mb-16 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
          <h2 className="text-xl font-bold font-mono mb-4 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> The Math: Why This Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">❌ All-Claude Approach</h3>
              <p className="text-zinc-400 mb-2">
                Running Claude Opus 4.5 for <em>everything</em> would cost ~$15-30 per project. 
                For 30 projects, that's <span className="text-red-400 font-bold">$450-900</span>. 
                Powerful, but expensive.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">✅ Multi-Model Strategy</h3>
              <p className="text-zinc-400 mb-2">
                Strategic model selection cuts costs to ~$3-8 per project. 
                30 projects = <span className="text-green-400 font-bold">$90-240</span>. 
                Same output quality. 70% less spend.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <p className="text-zinc-500 text-xs">
              💡 The secret: <strong>Use premium models where it matters, and cheap/free models everywhere else.</strong> 
              Architecture decisions? Claude. UI components? DeepSeek. Blog posts? Gemini (free). File cleanup? Local Qwen (zero cost). 
              This scales.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-2xl font-bold font-mono mb-4 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Powered By
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">OpenClaw Framework</h3>
              <p className="text-zinc-400 text-xs">
                The orchestration layer. Handles agent spawning, multi-model routing, memory persistence, 
                and tool access. The brain behind the operation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">OpenRouter</h3>
              <p className="text-zinc-400 text-xs">
                One API, 100+ models. Unified access to Anthropic, OpenAI, Google, Meta, and more. 
                No vendor lock-in.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">Ollama (Local)</h3>
              <p className="text-zinc-400 text-xs">
                Privacy-first local inference. Zero API costs for utility work. Full control, 
                no external dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
