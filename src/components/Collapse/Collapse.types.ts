export type CollapseProps = {
  title?: string;
  expand?: boolean;
  content?: string;
  onClickExpand?: () => void;
} & React.ComponentPropsWithoutRef<"div">;
