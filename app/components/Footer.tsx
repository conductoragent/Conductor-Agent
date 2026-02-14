import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-mono text-white">Conductor</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-500 text-sm">Autonomous Multi-Agent Platform</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/team" 
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Team
            </Link>
            <Link 
              href="/about" 
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </Link>
            <Link 
              href="/projects" 
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </Link>
          </div>

          {/* X/Twitter Link */}
          <a
            href="https://x.com/conductoragent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-sm">@conductoragent</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
          © {new Date().getFullYear()} Conductor. Built with autonomous agents.
        </div>
      </div>
    </footer>
  );
}
