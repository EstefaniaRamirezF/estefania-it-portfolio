import { Github, Linkedin, Mail, MapPin, Globe, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-medium mb-6"
              aria-label="Currently available for opportunities"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              />
              Available for opportunities
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-slate-400 text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                <span className="text-gradient">Estefanía</span>
                <br />
                <span className="text-gradient">Ramírez</span>
              </h1>
              <p className="text-xl text-cyan-400 font-medium mb-4 font-mono">
                {siteConfig.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-base leading-relaxed mb-6 max-w-lg"
            >
              {siteConfig.description}
            </motion.p>

            {/* Location & Language */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 text-sm text-slate-500"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan-400" aria-hidden="true" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe size={14} className="text-cyan-400" aria-hidden="true" />
                {siteConfig.languages}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-5"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                aria-label="GitHub profile — opens in new tab"
              >
                <Github size={18} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                aria-label="LinkedIn profile — opens in new tab"
              >
                <Linkedin size={18} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                aria-label="Send email"
              >
                <Mail size={18} aria-hidden="true" />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl scale-125"
                aria-hidden="true"
              />

              {/* Floating Avatar */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Avatar Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl shadow-cyan-500/10">
                  {/*
                    AVATAR SETUP:
                    1. Go to readyplayer.me and create a 3D avatar from your photo
                    2. Export as PNG with transparent background
                    3. Save as: public/assets/avatar-3d.png
                    4. Or use your profile photo directly at: public/assets/profile.jpg
                    The onError fallback will show your initials if no image is found.
                  */}
                  <img
                    src="/assets/avatar-3d.png"
                    alt="Estefanía Ramírez"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center"><span class="text-7xl font-bold" style="background: linear-gradient(135deg, #00d4ff, #00b4a0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">ER</span></div>'
                      }
                    }}
                  />
                </div>

                {/* Floating Badge — Azure */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                  className="absolute -top-4 -right-2 sm:-right-6 bg-slate-900 border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-mono text-cyan-400 shadow-lg shadow-cyan-500/10"
                  aria-hidden="true"
                >
                  ☁️ Azure
                </motion.div>

                {/* Floating Badge — GSOC */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-2 sm:-left-6 bg-slate-900 border border-purple-500/30 rounded-xl px-3 py-2 text-xs font-mono text-purple-400 shadow-lg shadow-purple-500/10"
                  aria-hidden="true"
                >
                  🔒 GSOC
                </motion.div>

                {/* Floating Badge — ITSM */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
                  className="absolute top-1/2 -right-6 sm:-right-10 bg-slate-900 border border-teal-500/30 rounded-xl px-3 py-2 text-xs font-mono text-teal-400 shadow-lg shadow-teal-500/10"
                  aria-hidden="true"
                >
                  🛠️ ITSM
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
          aria-hidden="true"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}