import * as React from 'react';
import { cn } from '../lib/utils';

// =============================================
// BOX TYPES
// =============================================

/** Size values - semantic or specific */
export type BoxSize =
  | 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit'
  | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  | '1/2' | '1/3' | '2/3' | '1/4' | '3/4';

/** Spacing values */
export type SpacingValue = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

/** Margin values (includes auto for centering) */
export type MarginValue = SpacingValue | 'auto';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Element type to render */
  as?: 'div' | 'section' | 'article' | 'aside' | 'main' | 'header' | 'footer' | 'nav';

  /** Width */
  width?: BoxSize;

  /** Height */
  height?: BoxSize;

  /** Min width */
  minWidth?: BoxSize;

  /** Max width */
  maxWidth?: BoxSize;

  /** Min height */
  minHeight?: BoxSize;

  /** Max height */
  maxHeight?: BoxSize;

  /** Padding (all sides) */
  padding?: SpacingValue;

  /** Padding horizontal */
  paddingX?: SpacingValue;

  /** Padding vertical */
  paddingY?: SpacingValue;

  /** Padding top */
  paddingTop?: SpacingValue;

  /** Padding right */
  paddingRight?: SpacingValue;

  /** Padding bottom */
  paddingBottom?: SpacingValue;

  /** Padding left */
  paddingLeft?: SpacingValue;

  /** Margin (all sides) */
  margin?: MarginValue;

  /** Margin horizontal */
  marginX?: MarginValue;

  /** Margin vertical */
  marginY?: MarginValue;

  /** Margin top */
  marginTop?: MarginValue;

  /** Margin right */
  marginRight?: MarginValue;

  /** Margin bottom */
  marginBottom?: MarginValue;

  /** Margin left */
  marginLeft?: MarginValue;

  /** Display type */
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none' | 'hidden';

  /** Position */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

  /** Overflow */
  overflow?: 'auto' | 'hidden' | 'visible' | 'scroll';

  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

  /** Background color (Tailwind class suffix, e.g., "gray-100") */
  background?: string;

  /** Border */
  border?: boolean | 'top' | 'bottom' | 'left' | 'right' | 'x' | 'y';

  /** Border color (Tailwind class suffix) */
  borderColor?: string;

  /** Shadow */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /** Center content (shorthand for flex + items-center + justify-center) */
  center?: boolean;
}

// =============================================
// STYLES
// =============================================

const widthStyles: Record<string, string> = {
  auto: 'w-auto',
  full: 'w-full',
  screen: 'w-screen',
  min: 'w-min',
  max: 'w-max',
  fit: 'w-fit',
  xs: 'w-20',       // 80px
  sm: 'w-40',       // 160px
  md: 'w-64',       // 256px
  lg: 'w-80',       // 320px
  xl: 'w-96',       // 384px
  '2xl': 'w-[512px]',
  '3xl': 'w-[640px]',
  '4xl': 'w-[768px]',
  '5xl': 'w-[1024px]',
  '6xl': 'w-[1280px]',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
  '2/3': 'w-2/3',
  '1/4': 'w-1/4',
  '3/4': 'w-3/4',
};

const heightStyles: Record<string, string> = {
  auto: 'h-auto',
  full: 'h-full',
  screen: 'h-screen',
  min: 'h-min',
  max: 'h-max',
  fit: 'h-fit',
  xs: 'h-20',
  sm: 'h-40',
  md: 'h-64',
  lg: 'h-80',
  xl: 'h-96',
  '2xl': 'h-[512px]',
  '3xl': 'h-[640px]',
  '4xl': 'h-[768px]',
  '5xl': 'h-[1024px]',
  '6xl': 'h-[1280px]',
  '1/2': 'h-1/2',
  '1/3': 'h-1/3',
  '2/3': 'h-2/3',
  '1/4': 'h-1/4',
  '3/4': 'h-3/4',
};

const minWidthStyles: Record<string, string> = {
  auto: 'min-w-0',
  full: 'min-w-full',
  min: 'min-w-min',
  max: 'min-w-max',
  fit: 'min-w-fit',
  xs: 'min-w-20',
  sm: 'min-w-40',
  md: 'min-w-64',
  lg: 'min-w-80',
  xl: 'min-w-96',
};

const maxWidthStyles: Record<string, string> = {
  full: 'max-w-full',
  min: 'max-w-min',
  max: 'max-w-max',
  fit: 'max-w-fit',
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
};

const minHeightStyles: Record<string, string> = {
  auto: 'min-h-0',
  full: 'min-h-full',
  screen: 'min-h-screen',
  min: 'min-h-min',
  max: 'min-h-max',
  fit: 'min-h-fit',
};

const maxHeightStyles: Record<string, string> = {
  full: 'max-h-full',
  screen: 'max-h-screen',
  min: 'max-h-min',
  max: 'max-h-max',
  fit: 'max-h-fit',
};

const spacingStyles: Record<SpacingValue, string> = {
  none: '0',
  '2xs': '0.5',
  xs: '1',
  sm: '2',
  md: '3',
  lg: '4',
  xl: '6',
  '2xl': '8',
  '3xl': '12',
  '4xl': '16',
};

const marginSpacingStyles: Record<MarginValue, string> = {
  none: '0',
  '2xs': '0.5',
  xs: '1',
  sm: '2',
  md: '3',
  lg: '4',
  xl: '6',
  '2xl': '8',
  '3xl': '12',
  '4xl': '16',
  auto: 'auto',
};

const displayStyles: Record<string, string> = {
  block: 'block',
  inline: 'inline',
  'inline-block': 'inline-block',
  flex: 'flex',
  'inline-flex': 'inline-flex',
  grid: 'grid',
  none: 'hidden',
  hidden: 'hidden',
};

const positionStyles: Record<string, string> = {
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
};

const overflowStyles: Record<string, string> = {
  auto: 'overflow-auto',
  hidden: 'overflow-hidden',
  visible: 'overflow-visible',
  scroll: 'overflow-scroll',
};

const roundedStyles: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

const shadowStyles: Record<string, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
};

const borderStyles: Record<string, string> = {
  true: 'border',
  top: 'border-t',
  bottom: 'border-b',
  left: 'border-l',
  right: 'border-r',
  x: 'border-x',
  y: 'border-y',
};

// =============================================
// BOX COMPONENT
// =============================================

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as: Component = 'div',
      className,
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      display,
      position,
      overflow,
      rounded,
      background,
      border,
      borderColor,
      shadow,
      center,
      children,
      ...props
    },
    ref
  ) => {
    // Build padding classes
    const paddingClasses = [
      padding && `p-${spacingStyles[padding]}`,
      paddingX && `px-${spacingStyles[paddingX]}`,
      paddingY && `py-${spacingStyles[paddingY]}`,
      paddingTop && `pt-${spacingStyles[paddingTop]}`,
      paddingRight && `pr-${spacingStyles[paddingRight]}`,
      paddingBottom && `pb-${spacingStyles[paddingBottom]}`,
      paddingLeft && `pl-${spacingStyles[paddingLeft]}`,
    ].filter(Boolean);

    // Build margin classes
    const marginClasses = [
      margin && `m-${marginSpacingStyles[margin]}`,
      marginX && `mx-${marginSpacingStyles[marginX]}`,
      marginY && `my-${marginSpacingStyles[marginY]}`,
      marginTop && `mt-${marginSpacingStyles[marginTop]}`,
      marginRight && `mr-${marginSpacingStyles[marginRight]}`,
      marginBottom && `mb-${marginSpacingStyles[marginBottom]}`,
      marginLeft && `ml-${marginSpacingStyles[marginLeft]}`,
    ].filter(Boolean);

    return (
      <Component
        ref={ref}
        className={cn(
          // Dimensions
          width && widthStyles[width],
          height && heightStyles[height],
          minWidth && minWidthStyles[minWidth],
          maxWidth && maxWidthStyles[maxWidth],
          minHeight && minHeightStyles[minHeight],
          maxHeight && maxHeightStyles[maxHeight],
          // Spacing
          ...paddingClasses,
          ...marginClasses,
          // Layout
          display && displayStyles[display],
          position && positionStyles[position],
          overflow && overflowStyles[overflow],
          // Visual
          rounded && roundedStyles[rounded],
          background && `bg-${background}`,
          border && borderStyles[String(border)],
          borderColor && `border-${borderColor}`,
          shadow && shadowStyles[shadow],
          // Center shorthand
          center && 'flex items-center justify-center',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';

export { Box };
