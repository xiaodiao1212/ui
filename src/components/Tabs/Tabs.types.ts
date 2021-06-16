export type SelectedCallback = (selectedIndex: number) => void;
export type TabsMode = "horizontal" | "vertical";
export interface TabsProps {
  defaultIndex: number;
  mode?: TabsMode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?:string
  onSelect?: SelectedCallback;
}

export interface TabsContextType {
  index: number;
  onSelect?: SelectedCallback;
}
