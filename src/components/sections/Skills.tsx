import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { skills, skillCategories } from '@/data/skills'
import type { Skill } from '@/types'

type BadgeVariant = 'cyan' | 'teal' | 'purple' | 'green' | 'yellow'

const categoryVariants: Record<Skill['category'], BadgeVariant> = {
  cloud: 'cyan',
  itsm: 'teal',
  security: 'purple',
  'data-tools': 'green',
  professional: 'yellow',
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="// tech.stack"
          title="Skills & Technologies"
          description="A structured overview of my technical capabilities and professional competencies."
          id="skills-heading"
        />

        <div className="space-y-6">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category.key)
            const variant = categoryVariants[category.key]

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08 }}
                className="rounded-xl border border-slate-800 bg-slate-900/30 p-6"
              >
                <h3 className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest mb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label={category.label}>
                  {categorySkills.map((skill) => (
                    <div key={skill.id} role="listitem">
                      <Badge variant={variant}>{skill.name}</Badge>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}