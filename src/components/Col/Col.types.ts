export type ColAlign = 'start'|'center'|'end'|'baseline'|'stretch'

export type ColProps =  {
  alignSelf?: ColAlign;
  flex?:number|string
}

export type ColPropsWithHTMLAttributes = Partial<
ColProps & React.HTMLAttributes<HTMLDivElement>
>;
