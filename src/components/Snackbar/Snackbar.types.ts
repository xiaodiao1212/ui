export type SnackbarProps = {
  show?: boolean;
};

export type SnackbarPropsWithHTMLAttributes = SnackbarProps &
  React.ComponentPropsWithoutRef<"aside">;
