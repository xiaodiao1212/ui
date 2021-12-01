/** @jsxImportSource @emotion/react */

import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
import Row from '../Row';
import Col from '../Col';

type AlertProps = Partial<{
  action: React.ReactNode;
  icon: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  className: string;
  children: React.ReactNode;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;
/**
 * The Alert component, some component libraries are also called NoticeBar or Banner, are generally embedded in the area between the Appbar and the main content, and display a fixed notification content or a special prompt, divided into icons, actions and scrollable themes. Information area
 * @param icon A notification icon on the far left
 * @param action An area used to display the subsequent operations of the information display
 * @param title The main summary of the reminder or notification message
 * @param content The main content of the reminder or notification message
 * @param children The main text content of the prompt, scrollable or custom content
 */
const Alert = ({ icon, action, co, title, content, className, children }: AlertProps) => {
  /**
   *The main style part of the component
   */
  const theme = useTheme() as Theme;
  const styles = css({
    background: theme ? (theme.mode == 'light' ? theme.color.accent : theme.color.grey) : '#F3F4F6',
    color: theme ? (theme.mode == 'light' ? theme.color.primary : theme.color.greyLight) : '#231F9C',
    padding: '.5em',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);

  /**
   * The rendering logic of the main content of the message or notification
   * @param title props.title
   * @param content props.content
   */
  const renderContent = (title?: React.ReactNode, content?: React.ReactNode) => {
    <Row vertical alignItems='start'>
      <Col>{title}</Col>
      <Col>{content}</Col>
    </Row>;
  };

  /**
   *The component is essentially a semantic aside, and the children render the corresponding ui
   */
  return (
    <aside css={styles} className={computedClassNames}>
      {icon}
      {children || renderContent(title, content)}
      {action}
    </aside>
  );
};
export default Alert;
