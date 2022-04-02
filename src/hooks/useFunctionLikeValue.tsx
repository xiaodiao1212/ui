import { Theme } from '../styles/themes';
export default function useFunctionLikeValue(theme: Theme, target: any) {
  return typeof target == 'function' ? target(theme) : target;
}
