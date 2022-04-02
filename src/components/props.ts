import React from 'react';
import { Theme } from '../styles/themes';

export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
export type Padding = Partial<{
  pt: string;
  pb: string;
  pl: string;
  pr: string;
  px: string;
  py: string;
  pa: string;
}>;
export type Margin = Partial<{
  mt: string;
  mb: string;
  ml: string;
  mr: string;
  mx: string;
  my: string;
  ma: string;
}>;

export type Position = Partial<{
  relative: boolean;
  absolute: boolean;
  fixed: boolean;
  sticky: boolean;
  static: boolean;
}>;
export type Radius = Partial<{
  radius: number;
}>;
export type Base = Partial<{
  onClick: () => any;
  className: string;
  children: React.ReactNode;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

export interface ColorObject {
  type: ColorFormat;
  values: any[];
}
