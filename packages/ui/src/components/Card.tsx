import * as React from 'react';
import { cn } from '../lib/utils';
import { Box, type BoxProps } from './Box';

// =============================================
// CARD TYPES
// =============================================

export interface CardProps extends Omit<BoxProps, 'as'> {
  /** Visual variant */
  variant?: 'elevated' | 'outline' | 'filled' | 'ghost';

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

// =============================================
// CARD COMPONENT
// =============================================

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'elevated',
      rounded = 'lg',
      isHoverable = false,
      isPressable = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="article"
        role={isPressable ? 'button' : undefined}
        tabIndex={isPressable ? 0 : undefined}
        onClick={onClick}
        onKeyDown={isPressable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        } : undefined}
        rounded={rounded}
        overflow="hidden"
        className={cn(
          // Variant
          variantStyles[variant],

          // Hoverable
          isHoverable && 'transition-shadow hover:shadow-lg',

          // Pressable
          isPressable && 'cursor-pointer transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',

          className
        )}
        {...props}
      >
        {children}
      </Box>
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
      <Box
        ref={ref}
        paddingX="xl"
        paddingY="lg"
        className={cn('border-b border-gray-100', className)}
        {...props}
      >
        {children}
      </Box>
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
      <Box
        ref={ref}
        paddingX="xl"
        paddingY="lg"
        className={className}
        {...props}
      >
        {children}
      </Box>
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
      <Box
        ref={ref}
        paddingX="xl"
        paddingY="lg"
        className={cn('border-t border-gray-100', className)}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardBody, CardFooter };
