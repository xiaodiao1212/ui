import * as CSS from "csstype";
export type ImageProps = {
  circle?: boolean;
  filter?: CSS.Properties<"filter">;
  fit?: CSS.Properties<"object-fit">;
} & React.ComponentPropsWithoutRef<"img">;
