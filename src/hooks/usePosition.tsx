import { Position } from '../components/props';

export default function usePosition(props: Position) {
  const { relative, absolute, sticky, fixed } = props;
  return {
    position: relative ? 'relative' : absolute ? 'absolute' : fixed ? 'fixed' : sticky ? 'sticky' : 'static',
  };
}
