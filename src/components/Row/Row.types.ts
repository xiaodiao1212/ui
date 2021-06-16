
export type RowAlign = 'start'|'center'|'end'|'baseline'|'stretch'
export type RowJustify = 'start'|'center'|'end'|'space-around'|'space-between'

export interface RowProps {
  align?: RowAlign;
  justify?:RowJustify;
  tag?:string;
  gutters?:number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?:string
}