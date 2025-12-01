import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// STACK TYPES
// =============================================

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /** Gap between items (in Tailwind spacing units) */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

  /** Align items on cross axis */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  /** Justify content on main axis */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /** Wrap items */
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';

  /** Divider between items */
  divider?: React.ReactNode;

  /** Full width */
  fullWidth?: boolean;
}

// =============================================
// STYLES
// =============================================

const directionStyles = {
  row: 'flex-row',
  column: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
};

const gapStyles = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
};

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const wrapStyles = {
  true: 'flex-wrap',
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
  false: 'flex-nowrap',
};

// =============================================
// STACK COMPONENT
// =============================================

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = 'column',
      gap = 4,
      align = 'stretch',
      justify = 'start',
      wrap = false,
      divider,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    // Handle dividers
    const childArray = React.Children.toArray(children).filter(Boolean);
    const hasDivider = !!divider;

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          directionStyles[direction],
          !hasDivider && gapStyles[gap],
          alignStyles[align],
          justifyStyles[justify],
          wrapStyles[String(wrap) as keyof typeof wrapStyles],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {hasDivider
          ? childArray.map((child, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className={cn(
                    direction === 'row' || direction === 'row-reverse'
                      ? `px-${gap / 2}`
                      : `py-${gap / 2}`
                  )}>
                    {divider}
                  </div>
                )}
                {child}
              </React.Fragment>
            ))
          : children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

// =============================================
// HSTACK & VSTACK SHORTCUTS
// =============================================

export interface HStackProps extends Omit<StackProps, 'direction'> {}
export interface VStackProps extends Omit<StackProps, 'direction'> {}

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ align = 'center', ...props }, ref) => {
    return <Stack ref={ref} direction="row" align={align} {...props} />;
  }
);

HStack.displayName = 'HStack';

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  (props, ref) => {
    return <Stack ref={ref} direction="column" {...props} />;
  }
);

VStack.displayName = 'VStack';

export { Stack, HStack, VStack };
