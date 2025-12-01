import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// CARD TYPES
// =============================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: 'elevated' | 'outline' | 'filled' | 'ghost';

  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /** Hoverable card */
  isHoverable?: boolean;

  /** Pressable/clickable card */
  isPressable?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

// =============================================
// STYLES
// =============================================

const variantStyles = {
  elevated: 'bg-white shadow-md',
  outline: 'bg-white border border-gray-200',
  filled: 'bg-gray-50',
  ghost: 'bg-transparent',
};

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const radiusStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
};

// =============================================
// CARD COMPONENT
// =============================================

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'elevated',
      padding = 'none',
      radius = 'lg',
      isHoverable = false,
      isPressable = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={isPressable ? 'button' : undefined}
        tabIndex={isPressable ? 0 : undefined}
        onClick={onClick}
        onKeyDown={isPressable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        } : undefined}
        className={cn(
          // Base
          'overflow-hidden',

          // Variant
          variantStyles[variant],

          // Padding
          paddingStyles[padding],

          // Radius
          radiusStyles[radius],

          // Hoverable
          isHoverable && 'transition-shadow hover:shadow-lg',

          // Pressable
          isPressable && 'cursor-pointer transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// =============================================
// CARD HEADER
// =============================================

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 border-b border-gray-100', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// =============================================
// CARD BODY
// =============================================

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

// =============================================
// CARD FOOTER
// =============================================

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 border-t border-gray-100', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardBody, CardFooter };
