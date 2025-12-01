/**
 * Breakpoints for responsive design
 */

export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const gridConfig = {
  xs: { columns: 4, gutter: '16px', margin: '16px' },
  sm: { columns: 8, gutter: '24px', margin: '24px' },
  md: { columns: 12, gutter: '24px', margin: '32px' },
  lg: { columns: 12, gutter: '32px', margin: '48px' },
  xl: { columns: 12, gutter: '32px', margin: '64px' },
  '2xl': { columns: 12, gutter: '32px', margin: '80px' },
} as const;

export type BreakpointKey = keyof typeof breakpoints;
