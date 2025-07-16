/**
 * Theme utilities for Frappe Components
 * 
 * These utilities make it easier to use the theme values in components
 * alongside Tailwind CSS classes.
 */

import { theme } from './theme';
import type {
  ColorName,
  ColorShade,
  SpacingKey,
  TypographyCategory,
  BorderRadiusKey,
  ShadowKey,
  BreakpointKey
} from './themeTypes';

/**
 * Get a color value from the theme
 * @param colorName - The color name (e.g., 'primary', 'gray')
 * @param shade - The shade of the color (e.g., '500', '900')
 * @returns The color value
 */
export const getColor = (colorName: ColorName, shade: ColorShade): string => {
  const color = theme.colors[colorName];
  
  if (!color) {
    console.warn(`Color "${colorName}" not found in theme`);
    return '';
  }
  
  // Type assertion since we know these objects have string/number keys
  const colorObj = color as Record<string | number, string>;
  
  if (!colorObj[shade]) {
    console.warn(`Shade "${shade}" of color "${colorName}" not found in theme`);
    return '';
  }
  
  return colorObj[shade];
};

/**
 * Get a spacing value from the theme
 * @param key - The spacing key (e.g., '4', '8')
 * @returns The spacing value
 */
export const getSpacing = (key: SpacingKey): string => {
  if (!theme.spacing[key]) {
    console.warn(`Spacing "${key}" not found in theme`);
    return '';
  }
  
  return theme.spacing[key];
};

/**
 * Get a typography value from the theme
 * @param category - The typography category (e.g., 'fontSize', 'fontWeight')
 * @param key - The typography key (e.g., 'base', 'bold')
 * @returns The typography value
 */
export const getTypography = (category: TypographyCategory, key: string): string | string[] => {
  const typographyCategory = theme.typography[category];
  
  if (!typographyCategory) {
    console.warn(`Typography category "${category}" not found in theme`);
    return '';
  }
  
  // Type assertion
  const categoryObj = typographyCategory as Record<string, string | string[]>;
  
  if (!categoryObj[key]) {
    console.warn(`Typography key "${key}" in category "${category}" not found in theme`);
    return '';
  }
  
  return categoryObj[key];
};

/**
 * Get a radius value from the theme
 * @param key - The radius key (e.g., 'sm', 'lg')
 * @returns The radius value
 */
export const getRadius = (key: BorderRadiusKey = 'DEFAULT'): string => {
  if (!theme.borderRadius[key]) {
    console.warn(`Border radius "${key}" not found in theme`);
    return '';
  }
  
  return theme.borderRadius[key];
};

/**
 * Get a shadow value from the theme
 * @param key - The shadow key (e.g., 'sm', 'lg')
 * @returns The shadow value
 */
export const getShadow = (key: ShadowKey = 'DEFAULT'): string => {
  if (!theme.shadows[key]) {
    console.warn(`Shadow "${key}" not found in theme`);
    return '';
  }
  
  return theme.shadows[key];
};

/**
 * Check if the current viewport matches a breakpoint
 * @param breakpoint - The breakpoint to check (e.g., 'sm', 'lg')
 * @returns Whether the viewport matches the breakpoint
 */
export const useBreakpoint = (breakpoint: BreakpointKey): boolean => {
  if (typeof window === 'undefined') return false;
  
  if (!theme.mediaQueries[breakpoint]) {
    console.warn(`Breakpoint "${breakpoint}" not found in theme`);
    return false;
  }
  
  return window.matchMedia(theme.mediaQueries[breakpoint]).matches;
};

export default {
  getColor,
  getSpacing,
  getTypography,
  getRadius,
  getShadow,
  useBreakpoint,
};
