import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { certifications } from '@/data/certifications'
import { ExternalLink, Clock, CheckCircle, BookOpen } from 'lucide-react'
import type { Certification } from '@/types'

type StatusVariant = 'green' | 'yellow' | 'default'

interface StatusConfig {
  label: string
  icon: typeof CheckCircle
  variant: StatusVariant
}

const statusConfig: Record<Certification['status'], StatusConfig> = {
  completed: {
    label: 'Completed',
    icon: CheckCircle,
    variant: 'green',
  },
  'in-progress': {
    label: 'In Progress',
    icon: Clock,
    variant: 'yellow',
  },
  planned: {
    label: 'Planned',
    icon: BookOpen,
    variant: 'default',
  },
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding"
      aria-labelledby="certs-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// credentials"
          title="Certifications"
          description="Active learning path toward cloud and IT certifications."
          id="certs-heading"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => {
            const status = statusConfig[cert.status]
            const StatusIcon = status.icon

            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-cyan-500/20 transition-all duration-300 flex flex-col w-full md:max-w-[380px]"
  aria-label={`${cert.name} — ${status.label}`}
              >
                {/* Status & Link */}
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={status.variant}>
                    <StatusIcon size={11} className="mr-1" aria-hidden="true" />
                    {status.label}
                  </Badge>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                      aria-label={`View ${cert.name} on official site — opens in new tab`}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1 leading-tight">{cert.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{cert.provider}</p>
                  {cert.description && (
                    <p className="text-slate-500 text-sm leading-relaxed">{cert.description}</p>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  <Badge variant="default">{cert.category.toUpperCase()}</Badge>
                  {cert.plannedDate && (
                    <span className="text-xs text-slate-600 font-mono">
                      Target: {cert.plannedDate}
                    </span>
                  )}
                  {cert.date && (
                    <span className="text-xs text-slate-600 font-mono">{cert.date}</span>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
