import { DefaultTheme, keyframes } from 'styled-components';

export type TSizes = 'sm' | 'md' | 'lg';
export type TExtendedSizes = TSizes | 'none' | 'xs' | 'xl';

/**
 * ref: https://www.thedrum.com/industryinsights/2021/10/01/10-energizing-color-palettes-sports-branding-and-marketing
 */
const palette = {
  primary: '#19204E',
  secondary: '#DF183F',
  attention: '#FCB300',
  white: 'white',
  black: 'black',
  gray: '#D6D6D6',
  body: '#eee',
  shadow: '#6a6a6aa3',
} as const;

const level: Record<TSizes, string> = {
  sm: `1px 1px 3px ${palette.shadow}`,
  md: `2px 2px 4px ${palette.shadow}`,
  lg: `4px 4px 6px ${palette.shadow}`,
};

const border: Record<TSizes, string> = {
  sm: `1px solid ${palette.black}`,
  md: `2px solid ${palette.black}`,
  lg: `4px solid ${palette.black}`,
};

const radius: Record<TSizes, number> = {
  sm: 3,
  md: 5,
  lg: 8,
};

const space: Record<TExtendedSizes, number> = {
  none: 0,
  xs: 3,
  sm: 5,
  md: 7,
  lg: 10,
  xl: 20,
};

export const theme: DefaultTheme = {
  dir: 'ltr',
  palette,
  border,
  space,
  level,
  radius,
};
