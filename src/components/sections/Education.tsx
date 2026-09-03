import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { education } from '@/data/education'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// education"
          title="Education"
          id="education-heading"
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.article
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-cyan-500/20 transition-all duration-300"
              aria-label={`${edu.degree} in ${edu.field ?? ''} from ${edu.institution}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <GraduationCap size={20} className="text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm leading-tight">
                      {edu.institution}
                    </h3>
                    <Badge
                      variant={edu.status === 'in-progress' ? 'yellow' : 'green'}
                      className="shrink-0"
                    >
                      {edu.status === 'in-progress' ? 'In Progress' : 'Completed'}
                    </Badge>
                  </div>
                  <p className="text-cyan-400 text-sm font-medium">{edu.degree}</p>
                  {edu.field && (
                    <p className="text-slate-400 text-sm">{edu.field}</p>
                  )}
                  {(edu.startDate ?? edu.endDate) && (
                    <p className="text-slate-600 text-xs font-mono mt-2">
                      {edu.startDate && edu.endDate
                        ? `${edu.startDate} — ${edu.endDate}`
                        : (edu.endDate ?? edu.startDate)}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}