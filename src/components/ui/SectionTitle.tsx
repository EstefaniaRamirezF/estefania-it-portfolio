import { cn } from '@/utils/cn'

interface SectionTitleProps {
  label: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionTitle({
  label,
  title,
  description,
  className,
  align = 'center',
  id,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-16', align === 'center' && 'text-center', className)}>
      <span className="inline-block text-xs font-mono font-medium text-cyan-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
        {label}
      </span>
      <h2
        id={id}
        className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4 leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}