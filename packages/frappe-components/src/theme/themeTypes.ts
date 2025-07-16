/**
 * TypeScript type definitions for the theme
 */

import { theme } from './theme';

// Theme element types
export type ColorName = keyof typeof theme.colors;
export type ColorShade = string | number;
export type SpacingKey = keyof typeof theme.spacing;
export type TypographyCategory = keyof typeof theme.typography;
export type FontFamilyKey = keyof typeof theme.typography.fontFamily;
export type FontSizeKey = keyof typeof theme.typography.fontSize;
export type FontWeightKey = keyof typeof theme.typography.fontWeight;
export type LineHeightKey = keyof typeof theme.typography.lineHeight;
export type LetterSpacingKey = keyof typeof theme.typography.letterSpacing;
export type BorderRadiusKey = keyof typeof theme.borderRadius;
export type ShadowKey = keyof typeof theme.shadows;
export type ZIndexKey = keyof typeof theme.zIndex;
export type TransitionPropertyKey = keyof typeof theme.transitions.property;
export type TransitionTimingFunctionKey = keyof typeof theme.transitions.timingFunction;
export type TransitionDurationKey = keyof typeof theme.transitions.duration;
export type AnimationKey = keyof typeof theme.animations;
export type BreakpointKey = keyof typeof theme.breakpoints | keyof typeof theme.mediaQueries;

// Theme utility types
export interface ThemeUtils {
  getColor: (colorName: ColorName, shade: ColorShade) => string;
  getSpacing: (key: SpacingKey) => string;
  getTypography: (category: TypographyCategory, key: string) => string | string[];
  getRadius: (key?: BorderRadiusKey) => string;
  getShadow: (key?: ShadowKey) => string;
  useBreakpoint: (breakpoint: BreakpointKey) => boolean;
}
