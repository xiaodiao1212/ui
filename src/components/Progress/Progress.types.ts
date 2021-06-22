export type ProgressProps = {
  noPadding?: boolean;
  padding?: string;
  noYPadding?: boolean;
  noXPadding?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
};

export type ProgressPropsWithHTMLAttributes = Partial<
  ProgressProps & React.HTMLAttributes<HTMLDivElement>
>;
