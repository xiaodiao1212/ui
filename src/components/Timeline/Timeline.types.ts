export type TimelineItem = {
  title?: string;
  content?: string;
  direction: "left" | "right";
};
export type TimelineProps = {
  data: TimelineItem[];
  lineColor?: string;
  lineWidth?: number;
} & React.ComponentPropsWithoutRef<"div">;
