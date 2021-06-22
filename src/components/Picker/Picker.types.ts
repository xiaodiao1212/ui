type Item = {
  value: number | string;
};
export type PickerProps = {
  data: Item[];
};

export type PickerPropsWithHTMLAttributes = Partial<
  PickerProps & React.HTMLAttributes<HTMLDivElement>
>;
