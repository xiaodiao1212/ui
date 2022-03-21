import { Margin } from '../constants/style';

export default function useMarginCSS(props: Margin) {
  const { ma, my, mt, mb, mx, ml, mr } = props;
  return { margin: ma, marginTop: mt || my, marginBottom: mb || my, marginLeft: ml || mx, marginRight: mr || mx };
}
