/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';

type BannerProps = Partial<{
  action: React.ReactNode;
  icon: React.ReactNode;
  className: string;
  children: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Alert = ({ icon, action, co, className, children }: BannerProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    background: theme ? (theme.mode == 'light' ? theme.color.accent : theme.color.grey) : '#F3F4F6',
    color: theme ? (theme.mode == 'light' ? theme.color.primary : theme.color.greyLight) : '#231F9C',
    padding: '.5em',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return (
    <div css={styles} className={computedClassNames}>
      {icon}
      {children}
      {action}
    </div>
  );
};
export default Alert;
