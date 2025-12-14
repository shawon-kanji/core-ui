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
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 focus-visible:ring-secondary-500',
  success: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 focus-visible:ring-success-500',
  warning: 'bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 focus-visible:ring-warning-500',
  error: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800 focus-visible:ring-error-500',
  info: 'bg-info-600 text-white hover:bg-info-700 active:bg-info-800 focus-visible:ring-info-500',

  // Palette colors
  slate: 'bg-slate-600 text-white hover:bg-slate-700 active:bg-slate-800 focus-visible:ring-slate-500',
  gray: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus-visible:ring-gray-500',
  zinc: 'bg-zinc-600 text-white hover:bg-zinc-700 active:bg-zinc-800 focus-visible:ring-zinc-500',
  neutral: 'bg-neutral-600 text-white hover:bg-neutral-700 active:bg-neutral-800 focus-visible:ring-neutral-500',
  stone: 'bg-stone-600 text-white hover:bg-stone-700 active:bg-stone-800 focus-visible:ring-stone-500',
  red: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500',
  orange: 'bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 focus-visible:ring-orange-500',
  amber: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 focus-visible:ring-amber-500',
  yellow: 'bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring-yellow-500',
  lime: 'bg-lime-500 text-black hover:bg-lime-600 active:bg-lime-700 focus-visible:ring-lime-500',
  green: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-green-500',
  emerald: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500',
  teal: 'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 focus-visible:ring-teal-500',
  cyan: 'bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800 focus-visible:ring-cyan-500',
  sky: 'bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800 focus-visible:ring-sky-500',
  blue: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500',
  indigo: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring-indigo-500',
  violet: 'bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 focus-visible:ring-violet-500',
  purple: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 focus-visible:ring-purple-500',
  fuchsia: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700 active:bg-fuchsia-800 focus-visible:ring-fuchsia-500',
  pink: 'bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800 focus-visible:ring-pink-500',
  rose: 'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 focus-visible:ring-rose-500',
};

const outlineColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
  secondary: 'border-secondary-600 text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100 focus-visible:ring-secondary-500',
  success: 'border-success-600 text-success-600 hover:bg-success-50 active:bg-success-100 focus-visible:ring-success-500',
  warning: 'border-warning-600 text-warning-600 hover:bg-warning-50 active:bg-warning-100 focus-visible:ring-warning-500',
  error: 'border-error-600 text-error-600 hover:bg-error-50 active:bg-error-100 focus-visible:ring-error-500',
  info: 'border-info-600 text-info-600 hover:bg-info-50 active:bg-info-100 focus-visible:ring-info-500',

  // Palette colors
  slate: 'border-slate-600 text-slate-600 hover:bg-slate-50 active:bg-slate-100 focus-visible:ring-slate-500',
  gray: 'border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-500',
  zinc: 'border-zinc-600 text-zinc-600 hover:bg-zinc-50 active:bg-zinc-100 focus-visible:ring-zinc-500',
  neutral: 'border-neutral-600 text-neutral-600 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:ring-neutral-500',
  stone: 'border-stone-600 text-stone-600 hover:bg-stone-50 active:bg-stone-100 focus-visible:ring-stone-500',
  red: 'border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-500',
  orange: 'border-orange-600 text-orange-600 hover:bg-orange-50 active:bg-orange-100 focus-visible:ring-orange-500',
  amber: 'border-amber-600 text-amber-600 hover:bg-amber-50 active:bg-amber-100 focus-visible:ring-amber-500',
  yellow: 'border-yellow-600 text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100 focus-visible:ring-yellow-500',
  lime: 'border-lime-600 text-lime-600 hover:bg-lime-50 active:bg-lime-100 focus-visible:ring-lime-500',
  green: 'border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100 focus-visible:ring-green-500',
  emerald: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 focus-visible:ring-emerald-500',
  teal: 'border-teal-600 text-teal-600 hover:bg-teal-50 active:bg-teal-100 focus-visible:ring-teal-500',
  cyan: 'border-cyan-600 text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 focus-visible:ring-cyan-500',
  sky: 'border-sky-600 text-sky-600 hover:bg-sky-50 active:bg-sky-100 focus-visible:ring-sky-500',
  blue: 'border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500',
  indigo: 'border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus-visible:ring-indigo-500',
  violet: 'border-violet-600 text-violet-600 hover:bg-violet-50 active:bg-violet-100 focus-visible:ring-violet-500',
  purple: 'border-purple-600 text-purple-600 hover:bg-purple-50 active:bg-purple-100 focus-visible:ring-purple-500',
  fuchsia: 'border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50 active:bg-fuchsia-100 focus-visible:ring-fuchsia-500',
  pink: 'border-pink-600 text-pink-600 hover:bg-pink-50 active:bg-pink-100 focus-visible:ring-pink-500',
  rose: 'border-rose-600 text-rose-600 hover:bg-rose-50 active:bg-rose-100 focus-visible:ring-rose-500',
};

const softColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300 focus-visible:ring-primary-500',
  secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 active:bg-secondary-300 focus-visible:ring-secondary-500',
  success: 'bg-success-100 text-success-700 hover:bg-success-200 active:bg-success-300 focus-visible:ring-success-500',
  warning: 'bg-warning-100 text-warning-700 hover:bg-warning-200 active:bg-warning-300 focus-visible:ring-warning-500',
  error: 'bg-error-100 text-error-700 hover:bg-error-200 active:bg-error-300 focus-visible:ring-error-500',
  info: 'bg-info-100 text-info-700 hover:bg-info-200 active:bg-info-300 focus-visible:ring-info-500',

  // Palette colors
  slate: 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-slate-500',
  gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring-gray-500',
  zinc: 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 focus-visible:ring-zinc-500',
  neutral: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-neutral-500',
  stone: 'bg-stone-100 text-stone-700 hover:bg-stone-200 active:bg-stone-300 focus-visible:ring-stone-500',
  red: 'bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300 focus-visible:ring-red-500',
  orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200 active:bg-orange-300 focus-visible:ring-orange-500',
  amber: 'bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300 focus-visible:ring-amber-500',
  yellow: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 active:bg-yellow-300 focus-visible:ring-yellow-500',
  lime: 'bg-lime-100 text-lime-700 hover:bg-lime-200 active:bg-lime-300 focus-visible:ring-lime-500',
  green: 'bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-300 focus-visible:ring-green-500',
  emerald: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 active:bg-emerald-300 focus-visible:ring-emerald-500',
  teal: 'bg-teal-100 text-teal-700 hover:bg-teal-200 active:bg-teal-300 focus-visible:ring-teal-500',
  cyan: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 active:bg-cyan-300 focus-visible:ring-cyan-500',
  sky: 'bg-sky-100 text-sky-700 hover:bg-sky-200 active:bg-sky-300 focus-visible:ring-sky-500',
  blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 focus-visible:ring-blue-500',
  indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 active:bg-indigo-300 focus-visible:ring-indigo-500',
  violet: 'bg-violet-100 text-violet-700 hover:bg-violet-200 active:bg-violet-300 focus-visible:ring-violet-500',
  purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200 active:bg-purple-300 focus-visible:ring-purple-500',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 active:bg-fuchsia-300 focus-visible:ring-fuchsia-500',
  pink: 'bg-pink-100 text-pink-700 hover:bg-pink-200 active:bg-pink-300 focus-visible:ring-pink-500',
  rose: 'bg-rose-100 text-rose-700 hover:bg-rose-200 active:bg-rose-300 focus-visible:ring-rose-500',
};

const ghostColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'text-primary-600 hover:bg-primary-100 active:bg-primary-200 focus-visible:ring-primary-500',
  secondary: 'text-secondary-600 hover:bg-secondary-100 active:bg-secondary-200 focus-visible:ring-secondary-500',
  success: 'text-success-600 hover:bg-success-100 active:bg-success-200 focus-visible:ring-success-500',
  warning: 'text-warning-600 hover:bg-warning-100 active:bg-warning-200 focus-visible:ring-warning-500',
  error: 'text-error-600 hover:bg-error-100 active:bg-error-200 focus-visible:ring-error-500',
  info: 'text-info-600 hover:bg-info-100 active:bg-info-200 focus-visible:ring-info-500',

  // Palette colors
  slate: 'text-slate-600 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-slate-500',
  gray: 'text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-500',
  zinc: 'text-zinc-600 hover:bg-zinc-100 active:bg-zinc-200 focus-visible:ring-zinc-500',
  neutral: 'text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-neutral-500',
  stone: 'text-stone-600 hover:bg-stone-100 active:bg-stone-200 focus-visible:ring-stone-500',
  red: 'text-red-600 hover:bg-red-100 active:bg-red-200 focus-visible:ring-red-500',
  orange: 'text-orange-600 hover:bg-orange-100 active:bg-orange-200 focus-visible:ring-orange-500',
  amber: 'text-amber-600 hover:bg-amber-100 active:bg-amber-200 focus-visible:ring-amber-500',
  yellow: 'text-yellow-600 hover:bg-yellow-100 active:bg-yellow-200 focus-visible:ring-yellow-500',
  lime: 'text-lime-600 hover:bg-lime-100 active:bg-lime-200 focus-visible:ring-lime-500',
  green: 'text-green-600 hover:bg-green-100 active:bg-green-200 focus-visible:ring-green-500',
  emerald: 'text-emerald-600 hover:bg-emerald-100 active:bg-emerald-200 focus-visible:ring-emerald-500',
  teal: 'text-teal-600 hover:bg-teal-100 active:bg-teal-200 focus-visible:ring-teal-500',
  cyan: 'text-cyan-600 hover:bg-cyan-100 active:bg-cyan-200 focus-visible:ring-cyan-500',
  sky: 'text-sky-600 hover:bg-sky-100 active:bg-sky-200 focus-visible:ring-sky-500',
  blue: 'text-blue-600 hover:bg-blue-100 active:bg-blue-200 focus-visible:ring-blue-500',
  indigo: 'text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200 focus-visible:ring-indigo-500',
  violet: 'text-violet-600 hover:bg-violet-100 active:bg-violet-200 focus-visible:ring-violet-500',
  purple: 'text-purple-600 hover:bg-purple-100 active:bg-purple-200 focus-visible:ring-purple-500',
  fuchsia: 'text-fuchsia-600 hover:bg-fuchsia-100 active:bg-fuchsia-200 focus-visible:ring-fuchsia-500',
  pink: 'text-pink-600 hover:bg-pink-100 active:bg-pink-200 focus-visible:ring-pink-500',
  rose: 'text-rose-600 hover:bg-rose-100 active:bg-rose-200 focus-visible:ring-rose-500',
};

const linkColorStyles: Record<ButtonColor, string> = {
  // Semantic colors
  primary: 'text-primary-600 hover:text-primary-700 active:text-primary-800 hover:underline focus-visible:ring-primary-500',
  secondary: 'text-secondary-600 hover:text-secondary-700 active:text-secondary-800 hover:underline focus-visible:ring-secondary-500',
  success: 'text-success-600 hover:text-success-700 active:text-success-800 hover:underline focus-visible:ring-success-500',
  warning: 'text-warning-600 hover:text-warning-700 active:text-warning-800 hover:underline focus-visible:ring-warning-500',
  error: 'text-error-600 hover:text-error-700 active:text-error-800 hover:underline focus-visible:ring-error-500',
  info: 'text-info-600 hover:text-info-700 active:text-info-800 hover:underline focus-visible:ring-info-500',

  // Palette colors
  slate: 'text-slate-600 hover:text-slate-700 active:text-slate-800 hover:underline focus-visible:ring-slate-500',
  gray: 'text-gray-600 hover:text-gray-700 active:text-gray-800 hover:underline focus-visible:ring-gray-500',
  zinc: 'text-zinc-600 hover:text-zinc-700 active:text-zinc-800 hover:underline focus-visible:ring-zinc-500',
  neutral: 'text-neutral-600 hover:text-neutral-700 active:text-neutral-800 hover:underline focus-visible:ring-neutral-500',
  stone: 'text-stone-600 hover:text-stone-700 active:text-stone-800 hover:underline focus-visible:ring-stone-500',
  red: 'text-red-600 hover:text-red-700 active:text-red-800 hover:underline focus-visible:ring-red-500',
  orange: 'text-orange-600 hover:text-orange-700 active:text-orange-800 hover:underline focus-visible:ring-orange-500',
  amber: 'text-amber-600 hover:text-amber-700 active:text-amber-800 hover:underline focus-visible:ring-amber-500',
  yellow: 'text-yellow-600 hover:text-yellow-700 active:text-yellow-800 hover:underline focus-visible:ring-yellow-500',
  lime: 'text-lime-600 hover:text-lime-700 active:text-lime-800 hover:underline focus-visible:ring-lime-500',
  green: 'text-green-600 hover:text-green-700 active:text-green-800 hover:underline focus-visible:ring-green-500',
  emerald: 'text-emerald-600 hover:text-emerald-700 active:text-emerald-800 hover:underline focus-visible:ring-emerald-500',
  teal: 'text-teal-600 hover:text-teal-700 active:text-teal-800 hover:underline focus-visible:ring-teal-500',
  cyan: 'text-cyan-600 hover:text-cyan-700 active:text-cyan-800 hover:underline focus-visible:ring-cyan-500',
  sky: 'text-sky-600 hover:text-sky-700 active:text-sky-800 hover:underline focus-visible:ring-sky-500',
  blue: 'text-blue-600 hover:text-blue-700 active:text-blue-800 hover:underline focus-visible:ring-blue-500',
  indigo: 'text-indigo-600 hover:text-indigo-700 active:text-indigo-800 hover:underline focus-visible:ring-indigo-500',
  violet: 'text-violet-600 hover:text-violet-700 active:text-violet-800 hover:underline focus-visible:ring-violet-500',
  purple: 'text-purple-600 hover:text-purple-700 active:text-purple-800 hover:underline focus-visible:ring-purple-500',
  fuchsia: 'text-fuchsia-600 hover:text-fuchsia-700 active:text-fuchsia-800 hover:underline focus-visible:ring-fuchsia-500',
  pink: 'text-pink-600 hover:text-pink-700 active:text-pink-800 hover:underline focus-visible:ring-pink-500',
  rose: 'text-rose-600 hover:text-rose-700 active:text-rose-800 hover:underline focus-visible:ring-rose-500',
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
    const ariaLabel = (props as Record<string, unknown>)['aria-label'] as string | undefined;
    const computedAriaLabel = ariaLabel || (isIconOnly && typeof children === 'string' ? children : undefined);

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-label={computedAriaLabel}
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
              'inline-flex items-center justify-center font-medium',
              'transform transition duration-150 shadow-sm hover:shadow-md',
              'active:scale-95 active:translate-y-[1px] active:brightness-95 active:shadow-lg',
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
