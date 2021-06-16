  
export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
export interface ColorObject {
  type: ColorFormat;
  values: any[];
}
