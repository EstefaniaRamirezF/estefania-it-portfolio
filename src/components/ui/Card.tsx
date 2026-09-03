import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6',
        hover && 'card-hover',
        className
      )}
    >
      {children}
    </div>
  )
}
