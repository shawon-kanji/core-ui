import { cn } from '../lib/utils';

export interface ProgressProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export function Progress({ value, max = 100, showLabel = false, color = 'primary', className }: ProgressProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = (clamped / max) * 100;

  const colorClasses: Record<string, string> = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    info: 'bg-info-500',
  };

  return (
    <div className={cn('w-full space-y-2', className)}>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={max}>
        <div
          className={cn('h-full rounded-full transition-all duration-300', colorClasses[color])}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-xs font-medium text-gray-600">{Math.round(percent)}%</div>
      )}
    </div>
  );
}
