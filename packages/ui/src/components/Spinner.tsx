import * as React from 'react';
import { cn } from '../lib/utils';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** Color of the spinner */
  color?: 'current' | 'primary' | 'secondary' | 'white';

  /** Accessibility label */
  label?: string;
}

const sizeStyles = {
  xs: 'h-3 w-3 border',
  sm: 'h-4 w-4 border-2',
  md: 'h-5 w-5 border-2',
  lg: 'h-6 w-6 border-2',
  xl: 'h-8 w-8 border-[3px]',
};

const colorStyles = {
  current: 'border-current',
  primary: 'border-primary-600',
  secondary: 'border-secondary-600',
  white: 'border-white',
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = 'md',
      color = 'current',
      label = 'Loading...',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(
          'inline-block animate-spin rounded-full border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]',
          sizeStyles[size],
          colorStyles[color],
          className
        )}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export { Spinner };
