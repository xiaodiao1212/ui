export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
export type Padding = {
  pt: string;
  pb: string;
  pl: string;
  pr: string;
  px: string;
  py: string;
  pa: string;
};

export type Margin = {
  mt: string;
  mb: string;
  ml: string;
  mr: string;
  mx: string;
  my: string;
  ma: string;
};

export interface ColorObject {
  type: ColorFormat;
  values: any[];
}
