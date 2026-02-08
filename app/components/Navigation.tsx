'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/challenge', label: 'Challenge' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-mono font-bold">
            <span className="text-[#0052ff]">Conductor</span>
            <span className="text-zinc-300">AI</span>
          </Link>
          
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0052ff] ${
                    isActive ? 'text-[#0052ff]' : 'text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* $CONDUCTOR Token Button */}
            <a
              href="https://dexscreener.com/base/0xd54a113b286afe7166eacaeeca47e7bb938680b2d9c9bd60dca465d5025ce07e"
              target="_blank"
              rel="noopener noreferrer"
              className="conductor-token-btn relative px-4 py-2 bg-[#0052ff] text-white font-bold text-sm rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,82,255,0.6)]"
            >
              <span className="relative z-10">$CONDUCTOR</span>
              <div className="conductor-glow absolute inset-0 opacity-0"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
