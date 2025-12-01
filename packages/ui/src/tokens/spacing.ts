/**
 * Spacing Scale
 *
 * Based on 4px base unit
 * Use these values for consistent spacing throughout the UI
 */

export const spacing = {
  0: '0px',
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
} as const;

/**
 * Semantic Spacing Scale
 *
 * Use these for component gaps, padding, margins
 * Follows the same pattern as typography sizes
 */
export const semanticSpacing = {
  none: '0px',     // 0
  '2xs': '2px',    // 0.5
  xs: '4px',       // 1
  sm: '8px',       // 2
  md: '12px',      // 3
  lg: '16px',      // 4
  xl: '24px',      // 6
  '2xl': '32px',   // 8
  '3xl': '48px',   // 12
  '4xl': '64px',   // 16
} as const;

export type SpacingKey = keyof typeof spacing;
export type SemanticSpacingKey = keyof typeof semanticSpacing;

/**
 * Get spacing value
 */
export function getSpacing(key: SpacingKey): string {
  return spacing[key];
}

/**
 * Get semantic spacing value
 */
export function getSemanticSpacing(key: SemanticSpacingKey): string {
  return semanticSpacing[key];
}
