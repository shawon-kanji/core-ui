import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// BADGE TYPES
// =============================================

export type BadgeColor =
  | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
  | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
  | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
  | 'pink' | 'rose';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant */
  variant?: 'solid' | 'soft' | 'outline';

  /** Color */
  color?: BadgeColor;

  /** Size */
  size?: 'sm' | 'md' | 'lg';

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';

  /** Dot indicator (shows a dot instead of content) */
  dot?: boolean;
}

// =============================================
// COLOR STYLES
// =============================================

const solidColorStyles: Record<BadgeColor, string> = {
  primary: 'bg-primary-600 text-white',
  secondary: 'bg-secondary-600 text-white',
  success: 'bg-success-600 text-white',
  warning: 'bg-warning-500 text-white',
  error: 'bg-error-600 text-white',
  info: 'bg-info-600 text-white',
  slate: 'bg-slate-600 text-white',
  gray: 'bg-gray-600 text-white',
  zinc: 'bg-zinc-600 text-white',
  neutral: 'bg-neutral-600 text-white',
  stone: 'bg-stone-600 text-white',
  red: 'bg-red-600 text-white',
  orange: 'bg-orange-600 text-white',
  amber: 'bg-amber-500 text-white',
  yellow: 'bg-yellow-500 text-black',
  lime: 'bg-lime-500 text-black',
  green: 'bg-green-600 text-white',
  emerald: 'bg-emerald-600 text-white',
  teal: 'bg-teal-600 text-white',
  cyan: 'bg-cyan-600 text-white',
  sky: 'bg-sky-600 text-white',
  blue: 'bg-blue-600 text-white',
  indigo: 'bg-indigo-600 text-white',
  violet: 'bg-violet-600 text-white',
  purple: 'bg-purple-600 text-white',
  fuchsia: 'bg-fuchsia-600 text-white',
  pink: 'bg-pink-600 text-white',
  rose: 'bg-rose-600 text-white',
};

const softColorStyles: Record<BadgeColor, string> = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  error: 'bg-error-100 text-error-700',
  info: 'bg-info-100 text-info-700',
  slate: 'bg-slate-100 text-slate-700',
  gray: 'bg-gray-100 text-gray-700',
  zinc: 'bg-zinc-100 text-zinc-700',
  neutral: 'bg-neutral-100 text-neutral-700',
  stone: 'bg-stone-100 text-stone-700',
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
  amber: 'bg-amber-100 text-amber-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  lime: 'bg-lime-100 text-lime-700',
  green: 'bg-green-100 text-green-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  teal: 'bg-teal-100 text-teal-700',
  cyan: 'bg-cyan-100 text-cyan-700',
  sky: 'bg-sky-100 text-sky-700',
  blue: 'bg-blue-100 text-blue-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  violet: 'bg-violet-100 text-violet-700',
  purple: 'bg-purple-100 text-purple-700',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-700',
  pink: 'bg-pink-100 text-pink-700',
  rose: 'bg-rose-100 text-rose-700',
};

const outlineColorStyles: Record<BadgeColor, string> = {
  primary: 'border-primary-600 text-primary-600',
  secondary: 'border-secondary-600 text-secondary-600',
  success: 'border-success-600 text-success-600',
  warning: 'border-warning-600 text-warning-600',
  error: 'border-error-600 text-error-600',
  info: 'border-info-600 text-info-600',
  slate: 'border-slate-600 text-slate-600',
  gray: 'border-gray-600 text-gray-600',
  zinc: 'border-zinc-600 text-zinc-600',
  neutral: 'border-neutral-600 text-neutral-600',
  stone: 'border-stone-600 text-stone-600',
  red: 'border-red-600 text-red-600',
  orange: 'border-orange-600 text-orange-600',
  amber: 'border-amber-600 text-amber-600',
  yellow: 'border-yellow-600 text-yellow-600',
  lime: 'border-lime-600 text-lime-600',
  green: 'border-green-600 text-green-600',
  emerald: 'border-emerald-600 text-emerald-600',
  teal: 'border-teal-600 text-teal-600',
  cyan: 'border-cyan-600 text-cyan-600',
  sky: 'border-sky-600 text-sky-600',
  blue: 'border-blue-600 text-blue-600',
  indigo: 'border-indigo-600 text-indigo-600',
  violet: 'border-violet-600 text-violet-600',
  purple: 'border-purple-600 text-purple-600',
  fuchsia: 'border-fuchsia-600 text-fuchsia-600',
  pink: 'border-pink-600 text-pink-600',
  rose: 'border-rose-600 text-rose-600',
};

const dotColorStyles: Record<BadgeColor, string> = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  error: 'bg-error-500',
  info: 'bg-info-500',
  slate: 'bg-slate-500',
  gray: 'bg-gray-500',
  zinc: 'bg-zinc-500',
  neutral: 'bg-neutral-500',
  stone: 'bg-stone-500',
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-500',
  green: 'bg-green-500',
  emerald: 'bg-emerald-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  sky: 'bg-sky-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-500',
  purple: 'bg-purple-500',
  fuchsia: 'bg-fuchsia-500',
  pink: 'bg-pink-500',
  rose: 'bg-rose-500',
};

// =============================================
// SIZE STYLES
// =============================================

const sizeStyles = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm',
};

const dotSizeStyles = {
  sm: 'h-1.5 w-1.5',
  md: 'h-2 w-2',
  lg: 'h-2.5 w-2.5',
};

const radiusStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

// =============================================
// BADGE COMPONENT
// =============================================

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'soft',
      color = 'primary',
      size = 'md',
      radius = 'md',
      dot = false,
      children,
      ...props
    },
    ref
  ) => {
    // Get color styles based on variant
    const getColorStyles = () => {
      switch (variant) {
        case 'solid':
          return solidColorStyles[color];
        case 'soft':
          return softColorStyles[color];
        case 'outline':
          return `border ${outlineColorStyles[color]}`;
        default:
          return softColorStyles[color];
      }
    };

    // Dot badge
    if (dot) {
      return (
        <span
          ref={ref}
          className={cn(
            'inline-block rounded-full',
            dotSizeStyles[size],
            dotColorStyles[color],
            className
          )}
          {...props}
        />
      );
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium',
          sizeStyles[size],
          radiusStyles[radius],
          getColorStyles(),
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
