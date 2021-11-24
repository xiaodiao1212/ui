/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type BannerProps = Partial<{
  closable: boolean;
  className: string;
  children: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Alert = ({ closable = false, co, className, children }: BannerProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    background: theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6',
    color: theme ? theme.color.primary : '#231F9C',
    padding: '.5em',
    ...(typeof co == 'function' && co(theme)),
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames}>
      children
    </div>
  );
};
export default Alert;
