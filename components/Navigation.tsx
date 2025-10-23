'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  variant?: 'default' | 'minimal';
}

export default function Navigation({ variant = 'default' }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMinimal = variant === 'minimal';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMinimal
          ? 'bg-[#F5F3EF]/95 backdrop-blur-sm border-b border-black/5'
          : scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className={`text-2xl font-bold ${isMinimal ? 'text-slate-900' : scrolled ? 'text-slate-900' : 'text-white'}`}>
          Design<span className={isMinimal ? 'text-teal-600' : 'text-blue-600'}>Rails</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Version Switcher */}
          <div className="flex items-center gap-6">
            <a
              href="/"
              className={`text-sm font-medium transition-all pb-1 border-b-2 ${
                pathname === '/'
                  ? scrolled
                    ? 'text-blue-600 border-blue-600'
                    : 'text-white border-white'
                  : isMinimal
                  ? 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                  : scrolled
                  ? 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                  : 'text-white/80 hover:text-white border-transparent hover:border-white/50'
              }`}
            >
              Default
            </a>
            <Link
              href="/minimal"
              className={`text-sm font-medium transition-all pb-1 border-b-2 ${
                pathname === '/minimal'
                  ? 'text-teal-600 border-teal-600'
                  : isMinimal
                  ? 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                  : scrolled
                  ? 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                  : 'text-white/80 hover:text-white border-transparent hover:border-white/50'
              }`}
            >
              Minimal
            </Link>
            <Link
              href="/old"
              className={`text-sm font-medium transition-all pb-1 border-b-2 ${
                pathname === '/old'
                  ? scrolled
                    ? 'text-blue-600 border-blue-600'
                    : 'text-white border-white'
                  : isMinimal
                  ? 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                  : scrolled
                  ? 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
                  : 'text-white/80 hover:text-white border-transparent hover:border-white/50'
              }`}
            >
              Old
            </Link>
          </div>

          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              isMinimal
                ? 'bg-teal-600 text-white hover:bg-teal-700'
                : scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-slate-900 hover:bg-blue-50'
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
