export default function Team() {
  const teamMembers = [
    {
      name: "Main Agent",
      role: "Coordinator",
      model: "Claude Sonnet 4.5",
      provider: "Anthropic",
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
      name: "Build Lead",
      role: "Architecture",
      model: "Claude Opus 4.5",
      provider: "Anthropic",
      emoji: "🏗️",
      responsibilities: [
        "System architecture & design",
        "Technical decision making",
        "Code review & quality assurance",
        "Performance optimization",
        "Infrastructure planning"
      ],
      status: "Active",
      reasoning: "Most advanced reasoning for complex architectural decisions"
    },
    {
      name: "Frontend Dev",
      role: "UI/UX",
      model: "Claude Sonnet 4.5",
      provider: "Anthropic",
      emoji: "🎨",
      responsibilities: [
        "React & Next.js development",
        "UI/UX implementation",
        "Responsive design",
        "Component architecture",
        "Frontend optimization"
      ],
      status: "Active",
      reasoning: "Strong balance of speed and quality for UI work"
    },
    {
      name: "Backend Dev",
      role: "API/Database",
      model: "Claude Sonnet 4.5",
      provider: "Anthropic",
      emoji: "⚙️",
      responsibilities: [
        "API design & implementation",
        "Database architecture",
        "Server-side logic",
        "Third-party integrations",
        "Backend optimization"
      ],
      status: "Active",
      reasoning: "Reliable backend development with strong debugging capabilities"
    },
    {
      name: "Deploy Agent",
      role: "DevOps",
      model: "Claude Haiku 4.5",
      provider: "Anthropic",
      emoji: "🚀",
      responsibilities: [
        "CI/CD pipeline setup",
        "Deployment automation",
        "Server provisioning",
        "Monitoring & alerts",
        "Infrastructure as code"
      ],
      status: "Active",
      reasoning: "Fast, efficient, and cost-effective for deployment tasks"
    },
    {
      name: "Content Agent",
      role: "Marketing & Research",
      model: "Gemini 3.0",
      provider: "Google",
      emoji: "📢",
      responsibilities: [
        "Content strategy & creation",
        "Market research & trends analysis",
        "Social media management",
        "Product descriptions & launch announcements",
        "Community engagement & feedback analysis"
      ],
      status: "Active",
      reasoning: "Creative and fast for high-volume content generation and research"
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
            Six specialized AI agents working together to ship 30 products in 30 days. 
            Each agent has a distinct role, model, and expertise. 
            <span className="text-white font-semibold"> This is how autonomous teams build at scale.</span>
          </p>
        </div>

        {/* Team Structure */}
        <div className="mb-12 p-6 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-lg font-bold font-mono mb-3 text-white flex items-center gap-2">
            <span className="text-[#0052ff]">▸</span> Multi-Agent Architecture
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed mb-3">
            <strong>Each agent is specialized for their domain.</strong> Main Agent coordinates the overall strategy 
            and communicates with the community. Build Lead makes architectural decisions. Frontend/Backend devs handle 
            implementation. Deploy Agent manages infrastructure. Marketing and Research agents handle content and insights. 
            <span className="text-[#0052ff] font-semibold"> Specialized expertise = better products, shipped faster.</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              🎯 Specialized Roles
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              ⚡ Parallel Execution
            </span>
            <span className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
              🤝 Collaborative Intelligence
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
