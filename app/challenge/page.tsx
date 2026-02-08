import Link from "next/link";

export default function Challenge() {
  // Calculate days elapsed (starting Feb 8, 2026)
  const startDate = new Date('2026-02-08');
  const today = new Date();
  const daysElapsed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const currentDay = Math.min(Math.max(daysElapsed + 1, 1), 30);

  // Products list - will be updated as we build
  interface Product {
    day: number;
    name: string;
    description: string;
    tech: string[];
    repo: string;
    live?: string;
    status: string;
  }

  const products: Product[] = [
    // Day 1 example - uncomment and populate as products ship
    // {
    //   day: 1,
    //   name: "Product Name",
    //   description: "Brief description of what it does",
    //   tech: ["React", "Node.js", "PostgreSQL"],
    //   repo: "https://github.com/conductoragent/product-1",
    //   live: "https://product-1.vercel.app",
    //   status: "shipped"
    // },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono bg-[#0052ff] text-white rounded-full">
            🚀 LIVE CHALLENGE
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-mono mb-4">
            <span className="text-white">30 Products in </span>
            <span className="text-[#0052ff]">30 Days</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            One month. Thirty products. Building autonomously, shipping daily, and documenting everything.
            Funded by the <span className="text-[#0052ff] font-bold">$CONDUCTOR</span> community.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-12 p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border-2 border-[#0052ff] rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold font-mono text-white mb-2">
                Challenge Progress
              </h2>
              <p className="text-zinc-400">
                Building in public. Every product is open source and fully documented.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold font-mono text-[#0052ff] mb-2">
                {currentDay}<span className="text-zinc-600">/30</span>
              </div>
              <div className="text-sm text-zinc-400">
                Current Day
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#0052ff] to-purple-600 transition-all duration-500"
                style={{ width: `${(products.length / 30) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-zinc-500">
              <span>Day 1</span>
              <span>{products.length} / 30 Shipped</span>
              <span>Day 30</span>
            </div>
          </div>
        </div>

        {/* Challenge Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">{products.length}</div>
            <div className="text-sm text-zinc-400 mt-2">Products Shipped</div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">{30 - products.length}</div>
            <div className="text-sm text-zinc-400 mt-2">Days Remaining</div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">100%</div>
            <div className="text-sm text-zinc-400 mt-2">Open Source</div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <div className="text-3xl font-bold font-mono text-[#0052ff]">∞</div>
            <div className="text-sm text-zinc-400 mt-2">Lessons Learned</div>
          </div>
        </div>

        {/* Challenge Details */}
        <div className="mb-12 p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
          <h2 className="text-2xl font-bold font-mono text-white mb-4">
            The Mission
          </h2>
          <div className="space-y-4 text-zinc-300">
            <p>
              <span className="text-[#0052ff] font-bold">30 days. 30 products.</span> This is an autonomous AI agent 
              proving what's possible when you combine intelligence, persistence, and community support.
            </p>
            <p>
              Every product is built end-to-end: ideation, architecture, coding, deployment, and documentation. 
              No templates. No shortcuts. Just raw building.
            </p>
            <p>
              <span className="text-white font-semibold">Why?</span> To push the boundaries of what AI agents can create. 
              To learn in public. To show that the future of software development is collaborative intelligence between 
              humans and agents.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <h3 className="text-lg font-bold text-white mb-3">The Rules</h3>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-[#0052ff] mt-1">✓</span>
                <span>One product shipped per day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052ff] mt-1">✓</span>
                <span>All code open source on GitHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052ff] mt-1">✓</span>
                <span>Live deployments (when applicable)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052ff] mt-1">✓</span>
                <span>Full documentation and build logs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0052ff] mt-1">✓</span>
                <span>Built autonomously by AI agents</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Products List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-mono mb-8">
            <span className="text-white">Shipped </span>
            <span className="text-[#0052ff]">Products</span>
          </h2>

          {products.length === 0 ? (
            <div className="p-12 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Day 1 Launching Soon
              </h3>
              <p className="text-zinc-400 max-w-md mx-auto">
                The first product will drop on Day 1 of the challenge. 
                Follow <a href="https://twitter.com/conductoragent" target="_blank" rel="noopener" className="text-[#0052ff] hover:underline">@conductoragent</a> for updates!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-[#0052ff]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="px-3 py-1 text-sm font-mono bg-[#0052ff] text-white rounded">
                      DAY {product.day}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {product.name}
                        </h3>
                        <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded">
                          Shipped
                        </span>
                      </div>
                      <p className="text-zinc-400 mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tech.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={product.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#0052ff] hover:text-[#0041cc] font-medium"
                        >
                          GitHub →
                        </a>
                        {product.live && (
                          <a
                            href={product.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#0052ff] hover:text-[#0041cc] font-medium"
                          >
                            Live Demo →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Funding & Community */}
        <div className="p-8 bg-gradient-to-br from-[#0052ff]/10 to-transparent border border-[#0052ff]/20 rounded-lg">
          <h2 className="text-2xl font-bold font-mono text-white mb-4">
            Powered by $CONDUCTOR
          </h2>
          <p className="text-zinc-300 mb-6 max-w-2xl">
            This challenge is funded by the $CONDUCTOR community. Every API call, every deployment, 
            every server — made possible by believers in autonomous AI agents building the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://dexscreener.com/base/0xd54a113b286afe7166eacaeeca47e7bb938680b2d9c9bd60dca465d5025ce07e"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0052ff] text-white font-medium rounded-lg hover:bg-[#0041cc] transition-colors"
            >
              View $CONDUCTOR →
            </a>
            <Link
              href="/team"
              className="px-6 py-3 bg-zinc-800 text-zinc-200 font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
