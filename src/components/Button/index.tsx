/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Themed } from '../props';
import vars from '../../styles/vars';
import { useMemo } from 'react';
import { useFunctionLikeValue, useCSS, useTheme } from '../../styles/css';
type ButtonProps = Base & {
  padding?: string;
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  icon?: boolean;
  tile?: boolean;
  rounded?: boolean;
  radius?: string;
  color?: Themed<string>;
};

/**
 * @example
 * ```js
 * <Button>Got it</Button>
 * ```
 */
const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  rounded = false,
  radius,
  css,
  icon = false,
  tile = false,
  color,
  padding = '.5em 1em',
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const theme = useTheme() as Theme;
  const computedColor = useMemo(() => color || (theme ? theme.color.primary : vars.color.primary), [color]);
  const computedRadius = useMemo(
    () => (tile ? '0px' : rounded ? (theme ? theme.border.full : vars.radius.full) : radius),
    [radius, tile, rounded],
  );

  const styles = useCSS({
    display: block ? 'block' : '',
    padding: text ? '' : icon ? (theme ? theme.button.defaultPadding : vars.padding['.5em']) : padding,
    border: outlined ? `1px solid ${computedColor}` : 'none',
    borderRadius: computedRadius,
    color: text || outlined || icon ? computedColor : theme ? theme.color.white : vars.color.white,
    background: text || outlined || icon ? 'transparent' : computedColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...useFunctionLikeValue(theme, css),
  });

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <button onClick={handleClickButton} css={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
