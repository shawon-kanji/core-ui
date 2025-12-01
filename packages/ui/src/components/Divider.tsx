import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// DIVIDER TYPES
// =============================================

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Variant */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Color */
  color?: 'light' | 'default' | 'dark';

  /** With label */
  label?: React.ReactNode;

  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';
}

// =============================================
// STYLES
// =============================================

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const colorStyles = {
  light: 'border-gray-100',
  default: 'border-gray-200',
  dark: 'border-gray-300',
};

const labelPositionStyles = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

// =============================================
// DIVIDER COMPONENT
// =============================================

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      className,
      orientation = 'horizontal',
      variant = 'solid',
      color = 'default',
      label,
      labelPosition = 'center',
      ...props
    },
    ref
  ) => {
    // Vertical divider
    if (orientation === 'vertical') {
      return (
        <hr
          ref={ref}
          className={cn(
            'border-0 border-l h-full self-stretch',
            variantStyles[variant],
            colorStyles[color],
            className
          )}
          {...props}
        />
      );
    }

    // Horizontal divider with label
    if (label) {
      return (
        <div
          className={cn(
            'flex items-center w-full',
            labelPositionStyles[labelPosition]
          )}
        >
          {labelPosition !== 'left' && (
            <hr
              className={cn(
                'flex-grow border-0 border-t',
                variantStyles[variant],
                colorStyles[color],
                labelPosition === 'right' && 'flex-grow',
                labelPosition === 'center' && 'flex-1'
              )}
            />
          )}
          <span className="px-3 text-sm text-gray-500">
            {label}
          </span>
          {labelPosition !== 'right' && (
            <hr
              className={cn(
                'flex-grow border-0 border-t',
                variantStyles[variant],
                colorStyles[color],
                labelPosition === 'left' && 'flex-grow',
                labelPosition === 'center' && 'flex-1'
              )}
            />
          )}
        </div>
      );
    }

    // Simple horizontal divider
    return (
      <hr
        ref={ref}
        className={cn(
          'border-0 border-t w-full',
          variantStyles[variant],
          colorStyles[color],
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };
