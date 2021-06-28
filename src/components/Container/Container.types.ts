export type ContainerProps = {
  noPadding?: boolean;
  padding?: string;
  noYPadding?: boolean;
  noXPadding?: boolean;
  fullHeight?: boolean;
  sticky?: boolean;
  children?: React.ReactNode;
};

export type ContainerPropsWithHTMLAttributes = Partial<
  ContainerProps & React.HTMLAttributes<HTMLDivElement>
>;
