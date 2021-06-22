export type CardProps = {
  children?: React.ReactNode;
};

export type CardPropsWithHTMLAttributes = Partial<
  CardProps & React.HTMLAttributes<HTMLDivElement>
>;
