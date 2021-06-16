interface ButtonBaseProps {
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  sizing?:"normal"|"small"|"large"
  rounded?: boolean;
  color?: string;
  flat?: boolean;
}

export type ButtonProps = Partial<
  ButtonBaseProps &  React.HTMLAttributes<HTMLButtonElement>
>;
