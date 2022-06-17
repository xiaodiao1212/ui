/** @jsxImportSource @emotion/react */

// 上面的这个是必要的，为了方便的使用css方法设置动态css，emotion要求的
// 下面就是引入需要的工具类库和theme，vars

import { Theme } from '../../styles/themes';
import { Base } from '../props';
import vars from '../../styles/vars';
import { useMemo } from 'react';
import { css as useCSS, useTheme } from '@emotion/react';
import { useFunctionLikeValue } from '../../styles/css';
// 组件库有一些例如下面Base一样的常用的props type定义
// 组件中直接使用节约代码量

type ButtonProps = Base & {
  padding?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  icon?: boolean;
  tile?: boolean;
  rounded?: boolean;
  radius?: string;

  color?: ((theme: Theme) => string) | string; // 许多prop都应该考虑提供基于主题的函数赋值，和直接进行赋值两种方式的样式覆写
};

// 组件用解构赋值的方式接收props并提供一些初始设置

/**
 *
 * @param param0
 * @returns
 */
const Button = ({
  fullWidth = false,
  disabled = false,
  text = false,
  outlined = false,
  rounded = false,
  radius,
  css,
  icon = false,
  tile = false,
  color,
  padding = '.5em .75em', // 单位能用em就少用px
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const theme = useTheme() as Theme;

  // 一些计算比较复杂的，会频繁使用的props可以用hook缓存一下
  const computedColor = useMemo(() => (color || theme ? theme.color.primary : vars.color.primary), [color]);
  const computedRadius = useMemo(
    () => radius || (tile ? '0px' : rounded ? (theme ? theme.border.full : vars.radius.full) : radius),
    [radius, tile, rounded],
  );

  /**
   * 用emotion库的css方法构建组件非常方便，样式会动态计算，所以一些复杂计算要做缓存记得
   * 所有组件的单个css覆盖规则遵循 'props > theme > vars'
   * 特别影响性能的计算还可以分开用多个 css()分别计算
   * theme也是一个对象，被包裹在<App>组件下的组件会得到这个theme,
   * 所以所有的css都需要先判断是否有主题以确定是单独使用还是在app下使用
   * vars是一个对象，里面包括了整个组件库要用到的大部分的初始值，
   * 一旦以后出现大量重绘问题，影响性能的部分会借助css变量做特别优化。
   */

  const styles = useCSS({
    padding: padding || (icon || text ? '' : padding),
    width: fullWidth ? '100%' : '',
    border: outlined ? '1px solid ' + computedColor : 'none',
    borderRadius: computedRadius,
    color: text || outlined || icon ? computedColor : theme ? theme.color.white : vars.color.white,
    background: text || outlined || icon ? 'transparent' : computedColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...useFunctionLikeValue(theme, css),
  });

  // 比较普通的点击方法实现
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  // 一般一个组件就像这样返回，包括一些事件的实现，css部分，剩下的一律用props放入
  return (
    <button onClick={handleClickButton} css={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
