/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { Base, Margin, Themed } from '../props';
import vars from '../../styles/vars';
import { useMemo } from 'react';
import { useFunctionLikeValue, useCSS, useTheme, useMargin } from '../../styles/css';
type ButtonProps = Base & {
  padding?: string;
  block?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  icon?: boolean;
  rounded?: boolean;
  radius?: string;
  color?: Themed<string>;
} & Margin;

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
  color,
  padding = '.2em 1em',
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const theme = useTheme() as Theme;
  const computedColor = useMemo(() => color || (theme ? theme.color.primary : vars.color.primary), [color]);
  const computedRadius = useMemo(
    () => radius || (rounded ? (theme ? theme.border.full : vars.radius.full) : vars.radius.none),
    [radius, rounded],
  );

  const styles = useCSS({
    verticalAlign: 'middle',
    textAlign: 'center',
    display: block ? 'block' : '',
    minWidth: block ? '100%' : '',
    width: icon ? vars.em['2.5em'] : '',
    height: icon ? vars.em['2.5em'] : '',
    ...useMargin(props),
    padding: text || icon ? '' : padding,
    border: outlined ? `1px solid ${computedColor}` : 'none',
    borderRadius: computedRadius,
    color: text || outlined ? computedColor : theme ? theme.color.white : vars.color.white,
    background: text || outlined ? 'transparent' : computedColor,
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
