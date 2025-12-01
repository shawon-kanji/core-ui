import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// SKELETON TYPES
// =============================================

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width */
  width?: string | number;

  /** Height */
  height?: string | number;

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /** Animation style */
  animation?: 'pulse' | 'wave' | 'none';

  /** Show as circle */
  isCircle?: boolean;

  /** Show as text line */
  isText?: boolean;
}

// =============================================
// STYLES
// =============================================

const radiusStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const animationStyles = {
  pulse: 'animate-pulse',
  wave: 'animate-shimmer',
  none: '',
};

// =============================================
// SKELETON COMPONENT
// =============================================

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      width,
      height,
      radius = 'md',
      animation = 'pulse',
      isCircle = false,
      isText = false,
      style,
      ...props
    },
    ref
  ) => {
    const getStyles = (): React.CSSProperties => {
      const styles: React.CSSProperties = { ...style };

      if (width) {
        styles.width = typeof width === 'number' ? `${width}px` : width;
      }

      if (height) {
        styles.height = typeof height === 'number' ? `${height}px` : height;
      }

      if (isCircle) {
        styles.width = styles.width || '40px';
        styles.height = styles.height || styles.width;
      }

      if (isText) {
        styles.height = styles.height || '1em';
        styles.width = styles.width || '100%';
      }

      return styles;
    };

    return (
      <div
        ref={ref}
        className={cn(
          'bg-gray-200',
          radiusStyles[isCircle ? 'full' : radius],
          animationStyles[animation],
          isText && 'inline-block',
          className
        )}
        style={getStyles()}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

// =============================================
// SKELETON TEXT
// =============================================

export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of lines */
  lines?: number;

  /** Gap between lines */
  gap?: 'sm' | 'md' | 'lg';

  /** Animation style */
  animation?: 'pulse' | 'wave' | 'none';
}

const gapStyles = {
  sm: 'space-y-1',
  md: 'space-y-2',
  lg: 'space-y-3',
};

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      className,
      lines = 3,
      gap = 'md',
      animation = 'pulse',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(gapStyles[gap], className)}
        {...props}
      >
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            isText
            animation={animation}
            width={index === lines - 1 ? '80%' : '100%'}
          />
        ))}
      </div>
    );
  }
);

SkeletonText.displayName = 'SkeletonText';

// =============================================
// SKELETON CIRCLE
// =============================================

export interface SkeletonCircleProps extends Omit<SkeletonProps, 'isCircle' | 'isText'> {
  /** Size of the circle */
  size?: string | number;
}

const SkeletonCircle = React.forwardRef<HTMLDivElement, SkeletonCircleProps>(
  ({ size = 40, ...props }, ref) => {
    return (
      <Skeleton
        ref={ref}
        isCircle
        width={size}
        height={size}
        {...props}
      />
    );
  }
);

SkeletonCircle.displayName = 'SkeletonCircle';

export { Skeleton, SkeletonText, SkeletonCircle };
