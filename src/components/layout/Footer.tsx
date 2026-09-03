import { Github, Linkedin, Terminal } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t border-slate-800 bg-[#0a0e1a] py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-cyan-400" aria-hidden="true" />
            <span className="font-mono font-bold text-white">{siteConfig.name}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="GitHub profile — opens in new tab"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="LinkedIn profile — opens in new tab"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.
            
          </p>
        </div>
      </div>
    </footer>
  )
}