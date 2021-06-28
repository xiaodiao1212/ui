export interface OverlayProps {
  show: boolean;
  opacity?: string | number;
  zIndex?: string | number;
  shy?: boolean;
  children?: React.ReactNode;
}

export type OverlayPropsWithHTMLAttributes = Partial<
  OverlayProps & React.HTMLAttributes<HTMLDivElement>
>;
