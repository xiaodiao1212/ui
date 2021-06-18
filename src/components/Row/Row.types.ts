export type RowAlign = "start" | "center" | "end" | "baseline" | "stretch";
export type RowJustify =
  | "start"
  | "center"
  | "end"
  | "space-around"
  | "space-between";

export interface RowProps {
  align?: RowAlign;
  justify?: RowJustify;
  gutter?: string;
}

export type RowPropsWithHTMLAttributes = RowProps &
  React.ComponentPropsWithoutRef<"div">;
