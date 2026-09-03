import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// work.history"
          title="Professional Experience"
          description="A track record of operational discipline, technical support, and cross-functional collaboration."
          id="experience-heading"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-slate-700/50 to-transparent hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-16"
                aria-label={`${exp.position} at ${exp.company}`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-[18px] top-7 w-4 h-4 rounded-full border-2 border-cyan-500 bg-[#0a0e1a] hidden md:block"
                  aria-hidden="true"
                />

                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-cyan-500/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase
                          size={13}
                          className="text-cyan-400"
                          aria-hidden="true"
                        />
                        <span className="text-cyan-400 font-medium text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm shrink-0">
                      <Calendar size={13} aria-hidden="true" />
                      <time className="font-mono">
                        {exp.startDate} — {exp.endDate}
                      </time>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4" role="list">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span
                          className="text-cyan-400 mt-0.5 shrink-0 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Focus */}
                  <p className="text-xs text-slate-600 mt-3 font-mono leading-relaxed">
                    <span className="text-slate-500">Key focus:</span> {exp.focus}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}