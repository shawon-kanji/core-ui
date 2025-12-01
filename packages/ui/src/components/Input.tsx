import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// INPUT TYPES
// =============================================

export type InputColor =
  | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  | 'slate' | 'gray' | 'zinc' | 'neutral';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';

  /** Visual variant */
  variant?: 'outline' | 'filled' | 'flushed';

  /** Focus color */
  focusColor?: InputColor;

  /** Error state */
  isInvalid?: boolean;

  /** Disabled state */
  isDisabled?: boolean;

  /** Read-only state */
  isReadOnly?: boolean;

  /** Required field */
  isRequired?: boolean;

  /** Element on the left inside input */
  leftElement?: React.ReactNode;

  /** Element on the right inside input */
  rightElement?: React.ReactNode;

  /** Addon on the left outside input */
  leftAddon?: React.ReactNode;

  /** Addon on the right outside input */
  rightAddon?: React.ReactNode;

  /** Full width */
  fullWidth?: boolean;
}

// =============================================
// STYLES
// =============================================

const sizeStyles = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-4 text-base',
};

const variantStyles = {
  outline: 'border border-gray-300 bg-white focus:border-primary-500',
  filled: 'border border-transparent bg-gray-100 focus:bg-white focus:border-primary-500',
  flushed: 'border-0 border-b-2 border-gray-300 rounded-none px-0 focus:border-primary-500',
};

const focusColorStyles: Record<InputColor, string> = {
  primary: 'focus:ring-primary-500 focus:border-primary-500',
  secondary: 'focus:ring-secondary-500 focus:border-secondary-500',
  success: 'focus:ring-success-500 focus:border-success-500',
  warning: 'focus:ring-warning-500 focus:border-warning-500',
  error: 'focus:ring-error-500 focus:border-error-500',
  info: 'focus:ring-info-500 focus:border-info-500',
  slate: 'focus:ring-slate-500 focus:border-slate-500',
  gray: 'focus:ring-gray-500 focus:border-gray-500',
  zinc: 'focus:ring-zinc-500 focus:border-zinc-500',
  neutral: 'focus:ring-neutral-500 focus:border-neutral-500',
};

// =============================================
// INPUT COMPONENT
// =============================================

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      size = 'md',
      variant = 'outline',
      focusColor = 'primary',
      isInvalid = false,
      isDisabled,
      isReadOnly,
      isRequired,
      leftElement,
      rightElement,
      leftAddon,
      rightAddon,
      fullWidth = false,
      disabled,
      readOnly,
      required,
      ...props
    },
    ref
  ) => {
    const isDisabledFinal = isDisabled ?? disabled;
    const isReadOnlyFinal = isReadOnly ?? readOnly;
    const isRequiredFinal = isRequired ?? required;

    const hasAddons = leftAddon || rightAddon;
    const hasElements = leftElement || rightElement;

    const inputElement = (
      <input
        ref={ref}
        type={type}
        disabled={isDisabledFinal}
        readOnly={isReadOnlyFinal}
        required={isRequiredFinal}
        aria-invalid={isInvalid}
        className={cn(
          // Base styles
          'w-full rounded-md transition-colors',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',

          // Size
          sizeStyles[size],

          // Variant
          variantStyles[variant],

          // Focus color
          !isInvalid && focusColorStyles[focusColor],

          // Error state
          isInvalid && 'border-error-500 focus:border-error-500 focus:ring-error-500',

          // Disabled
          isDisabledFinal && 'opacity-50 cursor-not-allowed bg-gray-50',

          // Read only
          isReadOnlyFinal && 'bg-gray-50 cursor-default',

          // Padding adjustments for elements
          leftElement && 'pl-10',
          rightElement && 'pr-10',

          // No rounding when has addons
          leftAddon && 'rounded-l-none',
          rightAddon && 'rounded-r-none',

          className
        )}
        {...props}
      />
    );

    // Simple input without elements or addons
    if (!hasAddons && !hasElements) {
      return (
        <div className={cn(fullWidth && 'w-full')}>
          {inputElement}
        </div>
      );
    }

    // Input with left/right elements
    if (hasElements && !hasAddons) {
      return (
        <div className={cn('relative', fullWidth && 'w-full')}>
          {leftElement && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              {leftElement}
            </div>
          )}
          {inputElement}
          {rightElement && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              {rightElement}
            </div>
          )}
        </div>
      );
    }

    // Input with addons
    return (
      <div className={cn('flex', fullWidth && 'w-full')}>
        {leftAddon && (
          <span className={cn(
            'inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500',
            sizeStyles[size].split(' ').filter(s => s.startsWith('text-')).join(' ')
          )}>
            {leftAddon}
          </span>
        )}
        <div className={cn('relative flex-1', hasElements && 'relative')}>
          {leftElement && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              {leftElement}
            </div>
          )}
          {inputElement}
          {rightElement && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              {rightElement}
            </div>
          )}
        </div>
        {rightAddon && (
          <span className={cn(
            'inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500',
            sizeStyles[size].split(' ').filter(s => s.startsWith('text-')).join(' ')
          )}>
            {rightAddon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
