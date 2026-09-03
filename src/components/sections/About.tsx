import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Shield, Cloud, Headphones, Target } from 'lucide-react'

const focusAreas = [
  {
    icon: Headphones,
    title: 'IT Support',
    description: 'First-line support, troubleshooting, and service management workflows.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Shield,
    title: 'Security Operations',
    description: 'GSOC monitoring, incident response, and security escalation procedures.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Cloud,
    title: 'Cloud Support',
    description: 'Azure and AWS fundamentals, cloud environment operations and exposure.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
  {
    icon: Target,
    title: 'Continuous Growth',
    description: 'Actively pursuing AZ-900 and AWS Cloud Practitioner certifications.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '2', label: 'Languages' },
  { value: '3', label: 'IT Domains' },
]

export function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// about.me"
          title="About Me"
          id="about-heading"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-slate-400 leading-relaxed text-base">
              <p>
                Aspiring IT professional and Computer Systems student developing the skills
                needed for{' '}
                <span className="text-cyan-400 font-medium">IT Support</span>,{' '}
                <span className="text-cyan-400 font-medium">Security Operations</span> and{' '}
                <span className="text-cyan-400 font-medium">Cloud Support</span> roles.
              </p>
              <p>
                I bring hands-on experience in GSOC monitoring, incident response, technical
                support and database service operations, along with over five years of bilingual
                experience in customer and technical support within fast-paced,
                compliance-driven environments.
              </p>
              <p>
                My background includes real-time alert monitoring, incident escalation, service
                management workflows, troubleshooting, documentation and cross-functional
                collaboration.
              </p>
              <p>
                I am currently strengthening my skills in{' '}
                <span className="text-white font-medium">Azure</span>,{' '}
                <span className="text-white font-medium">AWS</span>,{' '}
                <span className="text-white font-medium">SQL</span>, and{' '}
                <span className="text-white font-medium">ITSM</span> with a strong interest in
                roles where I can combine operational discipline, communication, and technical
                growth to help support secure, reliable systems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/50"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Focus Area Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div
                    className={`w-10 h-10 rounded-lg ${area.bg} flex items-center justify-center mb-3`}
                    aria-hidden="true"
                  >
                    <area.icon size={20} className={area.color} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{area.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}