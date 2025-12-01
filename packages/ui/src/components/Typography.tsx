import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// TYPOGRAPHY TYPES
// =============================================

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type TextWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type TextColor =
  | 'default' | 'muted' | 'subtle'
  | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

// =============================================
// TEXT PROPS (simplified - no polymorphic complexity)
// =============================================

export interface TextProps {
  /** Text size */
  size?: TextSize;

  /** Font weight */
  weight?: TextWeight;

  /** Text color */
  color?: TextColor;

  /** Truncate with ellipsis */
  truncate?: boolean;

  /** Number of lines before truncating */
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;

  /** Render as different element */
  as?: 'p' | 'span' | 'div';

  /** Children */
  children?: React.ReactNode;

  /** Custom class */
  className?: string;
}

// =============================================
// HEADING PROPS
// =============================================

export interface HeadingProps {
  /** Heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /** Override visual size (independent of semantic level) */
  size?: TextSize;

  /** Font weight */
  weight?: TextWeight;

  /** Text color */
  color?: TextColor;

  /** Truncate with ellipsis */
  truncate?: boolean;

  /** Children */
  children?: React.ReactNode;

  /** Custom class */
  className?: string;
}

// =============================================
// STYLES
// =============================================

const sizeStyles: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
};

const weightStyles: Record<TextWeight, string> = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

const colorStyles: Record<TextColor, string> = {
  default: 'text-gray-900',
  muted: 'text-gray-600',
  subtle: 'text-gray-400',
  primary: 'text-primary-600',
  secondary: 'text-secondary-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  error: 'text-error-600',
  info: 'text-info-600',
};

const lineClampStyles = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
};

const headingSizeDefaults: Record<string, TextSize> = {
  h1: '4xl',
  h2: '3xl',
  h3: '2xl',
  h4: 'xl',
  h5: 'lg',
  h6: 'base',
};

// =============================================
// TEXT COMPONENT
// =============================================

function Text({
  className,
  size = 'base',
  weight = 'normal',
  color = 'default',
  truncate = false,
  lineClamp,
  as: Component = 'p',
  children,
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeStyles[size],
        weightStyles[weight],
        colorStyles[color],
        truncate && 'truncate',
        lineClamp && lineClampStyles[lineClamp],
        className
      )}
    >
      {children}
    </Component>
  );
}

Text.displayName = 'Text';

// =============================================
// HEADING COMPONENT
// =============================================

function Heading({
  className,
  as: Component = 'h2',
  size,
  weight = 'bold',
  color = 'default',
  truncate = false,
  children,
}: HeadingProps) {
  const computedSize = size || headingSizeDefaults[Component];

  return (
    <Component
      className={cn(
        sizeStyles[computedSize],
        weightStyles[weight],
        colorStyles[color],
        truncate && 'truncate',
        'tracking-tight',
        className
      )}
    >
      {children}
    </Component>
  );
}

Heading.displayName = 'Heading';

// =============================================
// LABEL COMPONENT
// =============================================

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Size */
  size?: 'sm' | 'md' | 'lg';

  /** Required indicator */
  isRequired?: boolean;

  /** Disabled state */
  isDisabled?: boolean;
}

const labelSizeStyles = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      size = 'md',
      isRequired = false,
      isDisabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={cn(
          'font-medium text-gray-700',
          labelSizeStyles[size],
          isDisabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
        {isRequired && (
          <span className="text-error-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';

// =============================================
// CODE COMPONENT
// =============================================

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Color scheme */
  color?: 'gray' | 'primary' | 'success' | 'warning' | 'error';
}

const codeColorStyles = {
  gray: 'bg-gray-100 text-gray-800',
  primary: 'bg-primary-100 text-primary-800',
  success: 'bg-success-100 text-success-800',
  warning: 'bg-warning-100 text-warning-800',
  error: 'bg-error-100 text-error-800',
};

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, color = 'gray', children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          'px-1.5 py-0.5 rounded text-sm font-mono',
          codeColorStyles[color],
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = 'Code';

export { Text, Heading, Label, Code };
