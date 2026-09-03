import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: 'Best way to reach me',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    hoverBorder: 'hover:border-cyan-500/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'estefania-ramirez-cybercreative-analyst',
    href: siteConfig.linkedin,
    description: 'Professional network',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    hoverBorder: 'hover:border-blue-500/30',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'EstefaniaRamirezF',
    href: siteConfig.github,
    description: 'Code & projects',
    color: 'text-slate-300',
    bg: 'bg-slate-500/10',
    hoverBorder: 'hover:border-slate-500/30',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="// get.in.touch"
          title="Contact"
          description="Open to IT Support, Security Operations, and Cloud Support opportunities. Let's connect."
          id="contact-heading"
        />

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10"
        >
          <MapPin size={14} className="text-cyan-400" aria-hidden="true" />
          <span>{siteConfig.location}</span>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center transition-all duration-300 ${link.hoverBorder} hover:bg-slate-900/80 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500`}
              aria-label={`Contact via ${link.label}${link.href.startsWith('mailto') ? '' : ' — opens in new tab'}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}
                aria-hidden="true"
              >
                <link.icon size={22} className={link.color} />
              </div>
              <h3 className="font-semibold text-white mb-1">{link.label}</h3>
              <p className="text-slate-500 text-xs mb-2">{link.description}</p>
              <p className={`text-xs font-mono ${link.color} truncate`}>{link.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}