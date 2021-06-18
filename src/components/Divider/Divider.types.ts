
export type DividerProps =  {
  vertical?: boolean;
  dashed?:boolean
}

export type DividerPropsWithHTMLAttributes = DividerProps & React.ComponentPropsWithoutRef<"hr">
