export type ModalProps = {
  show?: boolean;
  children?: React.ReactNode;
};
export type ModalPropsWithHTMLAttributes = Partial<
  ModalProps & React.HTMLAttributes<HTMLDivElement>
>;
