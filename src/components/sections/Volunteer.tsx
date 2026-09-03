import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { volunteerExperiences } from '@/data/volunteer'
import { Heart } from 'lucide-react'

export function Volunteer() {
  return (
    <section
      id="volunteer"
      className="section-padding"
      aria-labelledby="volunteer-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// community"
          title="Volunteer Experience"
          id="volunteer-heading"
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {volunteerExperiences.map((vol, index) => (
            <motion.article
              key={vol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/20 transition-all duration-300"
              aria-label={`Volunteer at ${vol.organization}, ${vol.year}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <Heart size={18} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm leading-tight mb-1">
                    {vol.organization}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium mb-0.5">{vol.role}</p>
                  <p className="text-slate-600 text-xs font-mono mb-3">{vol.year}</p>
                  <ul className="space-y-1.5" role="list">
                    {vol.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span
                          className="text-purple-400 mt-0.5 shrink-0 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}