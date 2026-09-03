import { ArrowLeft, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-mono text-cyan-400 text-sm mb-4 tracking-widest uppercase">
          Error 404
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">Not Found</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The resource you're looking for doesn't exist or has been moved.
        </p>

        {/* Terminal Block */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-sm text-left mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Terminal size={14} className="text-cyan-400" aria-hidden="true" />
            <span className="text-slate-500 text-xs">terminal</span>
          </div>
          <div>
            <span className="text-cyan-400">$ </span>
            <span className="text-slate-300">curl -I /missing-page</span>
          </div>
          <div className="mt-1">
            <span className="text-red-400">HTTP/1.1 404 Not Found</span>
          </div>
          <div className="mt-1">
            <span className="text-slate-500">Content-Type: text/html</span>
          </div>
        </div>

        <Button onClick={() => (window.location.href = '/')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Return Home
        </Button>
      </div>
    </div>
  )
}