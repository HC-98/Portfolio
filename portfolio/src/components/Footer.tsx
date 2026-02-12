"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-cyan-500 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    HC
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold text-white">hikmet.dev</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm">
              Full-Stack Developer specializing in .NET & Azure. Building cloud-native applications and meaningful software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/Hikmet Cilan Resume.pdf"
                  download
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hikmetcilan@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HC-98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/hikmetcilan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Hikmet Çilan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
