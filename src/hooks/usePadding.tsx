import { Padding } from '../components/props';
export default function usePadding(props: Padding) {
  const { pa, py, pt, pb, px, pl, pr } = props;
  return { padding: pa, paddingTop: pt || py, paddingBottop: pb || py, paddingLeft: pl || px, paddingRight: pr || px };
}
