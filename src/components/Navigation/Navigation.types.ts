export type NavigationProps = {
  noPadding?: boolean;
  padding?: string;
  noYPadding?: boolean;
  noXPadding?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
};

export type NavigationPropsWithHTMLAttributes = Partial<
  NavigationProps & React.HTMLAttributes<HTMLDivElement>
>;
