
export type DividerProps =  {
  vertical?: boolean;
}

export type DividerPropsWithHTMLAttributes = DividerProps & React.ComponentPropsWithoutRef<"hr"|"div">
