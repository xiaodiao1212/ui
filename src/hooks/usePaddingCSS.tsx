import { Padding } from '../constants/theme';

export default function usePaddingCSS(props: Padding) {
  const { pa, py, pt, pb, px, pl, pr } = props;
  return { padding: pa, paddingTop: pt || py, paddingBottop: pb || py, paddingLeft: pl || px, paddingRight: pr || px };
}
