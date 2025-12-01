import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// STACK TYPES
// =============================================

/** Gap values - semantic sizing like typography */
export type GapValue = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /** Gap between items - uses semantic spacing (none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl) */
  gap?: GapValue;

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

const gapStyles: Record<GapValue, string> = {
  none: 'gap-0',     // 0px
  '2xs': 'gap-0.5',  // 2px
  xs: 'gap-1',       // 4px
  sm: 'gap-2',       // 8px
  md: 'gap-3',       // 12px
  lg: 'gap-4',       // 16px
  xl: 'gap-6',       // 24px
  '2xl': 'gap-8',    // 32px
  '3xl': 'gap-12',   // 48px
  '4xl': 'gap-16',   // 64px
};

// Padding for dividers (half the gap on each side)
const dividerPaddingX: Record<GapValue, string> = {
  none: 'px-0',
  '2xs': 'px-0.5',
  xs: 'px-1',
  sm: 'px-2',
  md: 'px-3',
  lg: 'px-4',
  xl: 'px-6',
  '2xl': 'px-8',
  '3xl': 'px-12',
  '4xl': 'px-16',
};

const dividerPaddingY: Record<GapValue, string> = {
  none: 'py-0',
  '2xs': 'py-0.5',
  xs: 'py-1',
  sm: 'py-2',
  md: 'py-3',
  lg: 'py-4',
  xl: 'py-6',
  '2xl': 'py-8',
  '3xl': 'py-12',
  '4xl': 'py-16',
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
      gap = 'md',
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
                  <div className={
                    direction === 'row' || direction === 'row-reverse'
                      ? dividerPaddingX[gap]
                      : dividerPaddingY[gap]
                  }>
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
