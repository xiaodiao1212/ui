interface ContainerBaseProps {
  noPadding?: boolean;
  padding?: string;
  noYPadding?: boolean;
  noXPadding?: boolean;
  fullHeight?:boolean;
  children?: React.ReactNode;
}

export type ContainerProps = Partial<
  ContainerBaseProps & React.HTMLAttributes<HTMLDivElement>
>;
