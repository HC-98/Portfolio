"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function AnimatedBackground() {
  const { theme } = useTheme();

  const icons = [
    { symbol: '</>', top: '10%', left: '10%', delay: 0, duration: 25 },
    { symbol: '{ }', top: '20%', left: '80%', delay: 2, duration: 30 },
    { symbol: '<html>', top: '70%', left: '15%', delay: 4, duration: 28 },
    { symbol: 'fn()', top: '15%', left: '70%', delay: 1, duration: 26 },
    { symbol: '[]', top: '60%', left: '85%', delay: 3, duration: 32 },
    { symbol: '=>', top: '80%', left: '60%', delay: 5, duration: 27 },
    { symbol: 'const', top: '30%', left: '25%', delay: 2, duration: 29 },
    { symbol: 'API', top: '50%', left: '90%', delay: 4, duration: 31 },
    { symbol: '()', top: '40%', left: '5%', delay: 1, duration: 26 },
    { symbol: '.map', top: '85%', left: '30%', delay: 3, duration: 28 },
    { symbol: 'CSS', top: '25%', left: '50%', delay: 0, duration: 30 },
    { symbol: 'npm', top: '65%', left: '45%', delay: 5, duration: 27 },
    { symbol: 'git', top: '45%', left: '75%', delay: 2, duration: 29 },
    { symbol: 'async', top: '55%', left: '20%', delay: 4, duration: 31 },
    { symbol: '...', top: '35%', left: '60%', delay: 1, duration: 26 },
    { symbol: 'if', top: '75%', left: '78%', delay: 3, duration: 28 },
    { symbol: 'var', top: '18%', left: '40%', delay: 6, duration: 29 },
    { symbol: '&&', top: '48%', left: '35%', delay: 2, duration: 27 },
  ];

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden transition-opacity duration-700 ${
        theme === 'light' ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 0 }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-slate-400/50 font-mono text-lg md:text-xl font-bold animate-float"
          style={{
            top: icon.top,
            left: icon.left,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          {icon.symbol}
        </div>
      ))}
    </div>
  );
}
