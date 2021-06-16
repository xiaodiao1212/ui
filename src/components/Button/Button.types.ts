export type ButtonProps = {
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  sizing?: "normal" | "small" | "large";
  rounded?: boolean;
  color?: string;
  flat?: boolean;
};

export type ButtonPropsWithHTMLAttributes = Partial<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
>;
