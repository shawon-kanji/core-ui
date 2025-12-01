import * as React from 'react';
import { cn } from '../lib/utils';
import { Spinner } from './Spinner';

// =============================================
// COLOR TYPES
// =============================================

/**
 * Semantic colors - configured via CSS variables for branding
 */
export type SemanticColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

/**
 * Palette colors - full Tailwind color palette
 * Can be used directly for more specific color needs
 */
export type PaletteColor =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
  | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
  | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
  | 'pink' | 'rose';

/**
 * All available colors for Button
 */
export type ButtonColor = SemanticColor | PaletteColor;

// =============================================
// BUTTON PROPS
// =============================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'solid' | 'outline' | 'ghost' | 'soft' | 'link';

  /** Color - semantic (primary, secondary, etc.) or palette (blue, red, etc.) */
  color?: ButtonColor;

  /** Size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** Full width button */
  fullWidth?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Loading text (replaces children when loading) */
  loadingText?: string;

  /** Icon on the left */
  leftIcon?: React.ReactNode;

  /** Icon on the right */
  rightIcon?: React.ReactNode;

  /** Make button circular (for icon-only buttons) */
  isIconOnly?: boolean;

  /** Rounded style */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// =============================================
// COLOR STYLES MAPPING
// =============================================

const solidColorStyles: Record<ButtonColor, string> = {
  // Semantic colors (use CSS variables)
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500',
  success: 'bg-success-600 text-white hover:bg-success-700 focus-visible:ring-success-500',
  warning: 'bg-warning-500 text-white hover:bg-warning-600 focus-visible:ring-warning-500',
  error: 'bg-error-600 text-white hover:bg-error-700 focus-visible:ring-error-500',
  info: 'bg-info-600 text-white hover:bg-info-700 focus-visible:ring-info-500',

  // Palette colors
  slate: 'bg-slate-600 text-white hover:bg-slate-700 focus-visible:ring-slate-500',
  gray: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500',
  zinc: 'bg-zinc-600 text-white hover:bg-zinc-700 focus-visible:ring-zinc-500',
  neutral: 'bg-neutral-600 text-white hover:bg-neutral-700 focus-visible:ring-neutral-500',
  stone: 'bg-stone-600 text-white hover:bg-stone-700 focus-visible:ring-stone-500',
  red: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
  orange: 'bg-orange-600 text-white hover:bg-orange-700 focus-visible:ring-orange-500',
  amber: 'bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-500',
  yellow: 'bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:ring-yellow-500',
  lime: 'bg-lime-500 text-black hover:bg-lime-600 focus-visible:ring-lime-500',
  green: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500',
  emerald: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500',
  teal: 'bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-500',
  cyan: 'bg-cyan-600 text-white hover:bg-cyan-700 focus-visible:ring-cyan-500',
  sky: 'bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500',
  blue: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  indigo: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500',
  violet: 'bg-violet-600 text-white hover:bg-violet-700 focus-visible:ring-violet-500',
  purple: 'bg-purple-600 text-white hover:bg-purple-700 focus-visible:ring-purple-500',
  fuchsia: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 focus-visible:ring-fuchsia-500',
  pink: 'bg-pink-600 text-white hover:bg-pink-700 focus-visible:ring-pink-500',
  rose: 'bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500',
};

const outlineColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
  secondary: 'border-secondary-600 text-secondary-600 hover:bg-secondary-50 focus-visible:ring-secondary-500',
  success: 'border-success-600 text-success-600 hover:bg-success-50 focus-visible:ring-success-500',
  warning: 'border-warning-600 text-warning-600 hover:bg-warning-50 focus-visible:ring-warning-500',
  error: 'border-error-600 text-error-600 hover:bg-error-50 focus-visible:ring-error-500',
  info: 'border-info-600 text-info-600 hover:bg-info-50 focus-visible:ring-info-500',

  // Palette colors
  slate: 'border-slate-600 text-slate-600 hover:bg-slate-50 focus-visible:ring-slate-500',
  gray: 'border-gray-600 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500',
  zinc: 'border-zinc-600 text-zinc-600 hover:bg-zinc-50 focus-visible:ring-zinc-500',
  neutral: 'border-neutral-600 text-neutral-600 hover:bg-neutral-50 focus-visible:ring-neutral-500',
  stone: 'border-stone-600 text-stone-600 hover:bg-stone-50 focus-visible:ring-stone-500',
  red: 'border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-500',
  orange: 'border-orange-600 text-orange-600 hover:bg-orange-50 focus-visible:ring-orange-500',
  amber: 'border-amber-600 text-amber-600 hover:bg-amber-50 focus-visible:ring-amber-500',
  yellow: 'border-yellow-600 text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-500',
  lime: 'border-lime-600 text-lime-600 hover:bg-lime-50 focus-visible:ring-lime-500',
  green: 'border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-500',
  emerald: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus-visible:ring-emerald-500',
  teal: 'border-teal-600 text-teal-600 hover:bg-teal-50 focus-visible:ring-teal-500',
  cyan: 'border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus-visible:ring-cyan-500',
  sky: 'border-sky-600 text-sky-600 hover:bg-sky-50 focus-visible:ring-sky-500',
  blue: 'border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500',
  indigo: 'border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-500',
  violet: 'border-violet-600 text-violet-600 hover:bg-violet-50 focus-visible:ring-violet-500',
  purple: 'border-purple-600 text-purple-600 hover:bg-purple-50 focus-visible:ring-purple-500',
  fuchsia: 'border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50 focus-visible:ring-fuchsia-500',
  pink: 'border-pink-600 text-pink-600 hover:bg-pink-50 focus-visible:ring-pink-500',
  rose: 'border-rose-600 text-rose-600 hover:bg-rose-50 focus-visible:ring-rose-500',
};

const softColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200 focus-visible:ring-primary-500',
  secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus-visible:ring-secondary-500',
  success: 'bg-success-100 text-success-700 hover:bg-success-200 focus-visible:ring-success-500',
  warning: 'bg-warning-100 text-warning-700 hover:bg-warning-200 focus-visible:ring-warning-500',
  error: 'bg-error-100 text-error-700 hover:bg-error-200 focus-visible:ring-error-500',
  info: 'bg-info-100 text-info-700 hover:bg-info-200 focus-visible:ring-info-500',

  // Palette colors
  slate: 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-500',
  gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-500',
  zinc: 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 focus-visible:ring-zinc-500',
  neutral: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus-visible:ring-neutral-500',
  stone: 'bg-stone-100 text-stone-700 hover:bg-stone-200 focus-visible:ring-stone-500',
  red: 'bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-500',
  orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200 focus-visible:ring-orange-500',
  amber: 'bg-amber-100 text-amber-700 hover:bg-amber-200 focus-visible:ring-amber-500',
  yellow: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 focus-visible:ring-yellow-500',
  lime: 'bg-lime-100 text-lime-700 hover:bg-lime-200 focus-visible:ring-lime-500',
  green: 'bg-green-100 text-green-700 hover:bg-green-200 focus-visible:ring-green-500',
  emerald: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus-visible:ring-emerald-500',
  teal: 'bg-teal-100 text-teal-700 hover:bg-teal-200 focus-visible:ring-teal-500',
  cyan: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 focus-visible:ring-cyan-500',
  sky: 'bg-sky-100 text-sky-700 hover:bg-sky-200 focus-visible:ring-sky-500',
  blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-500',
  indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus-visible:ring-indigo-500',
  violet: 'bg-violet-100 text-violet-700 hover:bg-violet-200 focus-visible:ring-violet-500',
  purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200 focus-visible:ring-purple-500',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 focus-visible:ring-fuchsia-500',
  pink: 'bg-pink-100 text-pink-700 hover:bg-pink-200 focus-visible:ring-pink-500',
  rose: 'bg-rose-100 text-rose-700 hover:bg-rose-200 focus-visible:ring-rose-500',
};

const ghostColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'text-primary-600 hover:bg-primary-100 focus-visible:ring-primary-500',
  secondary: 'text-secondary-600 hover:bg-secondary-100 focus-visible:ring-secondary-500',
  success: 'text-success-600 hover:bg-success-100 focus-visible:ring-success-500',
  warning: 'text-warning-600 hover:bg-warning-100 focus-visible:ring-warning-500',
  error: 'text-error-600 hover:bg-error-100 focus-visible:ring-error-500',
  info: 'text-info-600 hover:bg-info-100 focus-visible:ring-info-500',

  // Palette colors
  slate: 'text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-500',
  gray: 'text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-500',
  zinc: 'text-zinc-600 hover:bg-zinc-100 focus-visible:ring-zinc-500',
  neutral: 'text-neutral-600 hover:bg-neutral-100 focus-visible:ring-neutral-500',
  stone: 'text-stone-600 hover:bg-stone-100 focus-visible:ring-stone-500',
  red: 'text-red-600 hover:bg-red-100 focus-visible:ring-red-500',
  orange: 'text-orange-600 hover:bg-orange-100 focus-visible:ring-orange-500',
  amber: 'text-amber-600 hover:bg-amber-100 focus-visible:ring-amber-500',
  yellow: 'text-yellow-600 hover:bg-yellow-100 focus-visible:ring-yellow-500',
  lime: 'text-lime-600 hover:bg-lime-100 focus-visible:ring-lime-500',
  green: 'text-green-600 hover:bg-green-100 focus-visible:ring-green-500',
  emerald: 'text-emerald-600 hover:bg-emerald-100 focus-visible:ring-emerald-500',
  teal: 'text-teal-600 hover:bg-teal-100 focus-visible:ring-teal-500',
  cyan: 'text-cyan-600 hover:bg-cyan-100 focus-visible:ring-cyan-500',
  sky: 'text-sky-600 hover:bg-sky-100 focus-visible:ring-sky-500',
  blue: 'text-blue-600 hover:bg-blue-100 focus-visible:ring-blue-500',
  indigo: 'text-indigo-600 hover:bg-indigo-100 focus-visible:ring-indigo-500',
  violet: 'text-violet-600 hover:bg-violet-100 focus-visible:ring-violet-500',
  purple: 'text-purple-600 hover:bg-purple-100 focus-visible:ring-purple-500',
  fuchsia: 'text-fuchsia-600 hover:bg-fuchsia-100 focus-visible:ring-fuchsia-500',
  pink: 'text-pink-600 hover:bg-pink-100 focus-visible:ring-pink-500',
  rose: 'text-rose-600 hover:bg-rose-100 focus-visible:ring-rose-500',
};

const linkColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'text-primary-600 hover:text-primary-700 hover:underline focus-visible:ring-primary-500',
  secondary: 'text-secondary-600 hover:text-secondary-700 hover:underline focus-visible:ring-secondary-500',
  success: 'text-success-600 hover:text-success-700 hover:underline focus-visible:ring-success-500',
  warning: 'text-warning-600 hover:text-warning-700 hover:underline focus-visible:ring-warning-500',
  error: 'text-error-600 hover:text-error-700 hover:underline focus-visible:ring-error-500',
  info: 'text-info-600 hover:text-info-700 hover:underline focus-visible:ring-info-500',

  // Palette colors
  slate: 'text-slate-600 hover:text-slate-700 hover:underline focus-visible:ring-slate-500',
  gray: 'text-gray-600 hover:text-gray-700 hover:underline focus-visible:ring-gray-500',
  zinc: 'text-zinc-600 hover:text-zinc-700 hover:underline focus-visible:ring-zinc-500',
  neutral: 'text-neutral-600 hover:text-neutral-700 hover:underline focus-visible:ring-neutral-500',
  stone: 'text-stone-600 hover:text-stone-700 hover:underline focus-visible:ring-stone-500',
  red: 'text-red-600 hover:text-red-700 hover:underline focus-visible:ring-red-500',
  orange: 'text-orange-600 hover:text-orange-700 hover:underline focus-visible:ring-orange-500',
  amber: 'text-amber-600 hover:text-amber-700 hover:underline focus-visible:ring-amber-500',
  yellow: 'text-yellow-600 hover:text-yellow-700 hover:underline focus-visible:ring-yellow-500',
  lime: 'text-lime-600 hover:text-lime-700 hover:underline focus-visible:ring-lime-500',
  green: 'text-green-600 hover:text-green-700 hover:underline focus-visible:ring-green-500',
  emerald: 'text-emerald-600 hover:text-emerald-700 hover:underline focus-visible:ring-emerald-500',
  teal: 'text-teal-600 hover:text-teal-700 hover:underline focus-visible:ring-teal-500',
  cyan: 'text-cyan-600 hover:text-cyan-700 hover:underline focus-visible:ring-cyan-500',
  sky: 'text-sky-600 hover:text-sky-700 hover:underline focus-visible:ring-sky-500',
  blue: 'text-blue-600 hover:text-blue-700 hover:underline focus-visible:ring-blue-500',
  indigo: 'text-indigo-600 hover:text-indigo-700 hover:underline focus-visible:ring-indigo-500',
  violet: 'text-violet-600 hover:text-violet-700 hover:underline focus-visible:ring-violet-500',
  purple: 'text-purple-600 hover:text-purple-700 hover:underline focus-visible:ring-purple-500',
  fuchsia: 'text-fuchsia-600 hover:text-fuchsia-700 hover:underline focus-visible:ring-fuchsia-500',
  pink: 'text-pink-600 hover:text-pink-700 hover:underline focus-visible:ring-pink-500',
  rose: 'text-rose-600 hover:text-rose-700 hover:underline focus-visible:ring-rose-500',
};

// =============================================
// SIZE STYLES
// =============================================

const sizeStyles = {
  xs: 'h-7 px-2.5 text-xs gap-1',
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-base gap-2',
  xl: 'h-12 px-6 text-base gap-2.5',
};

const iconOnlySizeStyles = {
  xs: 'h-7 w-7',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-11 w-11',
  xl: 'h-12 w-12',
};

const roundedStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

// =============================================
// BUTTON COMPONENT
// =============================================

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'solid',
      color = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      loadingText,
      leftIcon,
      rightIcon,
      isIconOnly = false,
      rounded = 'md',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Get variant-specific color styles
    const getColorStyles = () => {
      switch (variant) {
        case 'solid':
          return solidColorStyles[color];
        case 'outline':
          return `border ${outlineColorStyles[color]}`;
        case 'soft':
          return softColorStyles[color];
        case 'ghost':
          return ghostColorStyles[color];
        case 'link':
          return linkColorStyles[color];
        default:
          return solidColorStyles[color];
      }
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',

          // Rounded
          roundedStyles[rounded],

          // Size
          isIconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],

          // Full width
          fullWidth && 'w-full',

          // Color styles based on variant
          getColorStyles(),

          // Loading cursor
          loading && 'cursor-wait',

          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size={size === 'xs' || size === 'sm' ? 'sm' : 'md'} />
            {loadingText && <span>{loadingText}</span>}
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
