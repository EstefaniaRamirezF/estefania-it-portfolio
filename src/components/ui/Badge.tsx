import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'cyan' | 'teal' | 'purple' | 'green' | 'yellow'
  className?: string
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-slate-800 text-slate-300 border-slate-700',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  teal: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  green: 'bg-green-500/10 text-green-400 border-green-500/30',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
