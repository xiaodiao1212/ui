/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
type TextareaProps = {
  showCount?: boolean | ((length: number, maxLength?: number) => React.ReactNode);
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

/**
 * The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 * @param props React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
 * @returns Textarea
 */
const Textarea = ({
  co,
  showCount,
  className,
  onChange,
  ...props
}: Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'onChange'> &
  TextareaProps) => {
  const theme = useTheme() as Theme;
  const styles = css({
    width: '100%',
    padding: '12px',
    backgroundColor: theme.mode == 'light' ? theme.color.greyLight : theme.color.white,
    color: theme.mode == 'light' ? theme.color.black : theme.color.white,
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value, e);
  };
  const computedClassNames = clsx(className);
  return <textarea {...props} css={styles} className={computedClassNames} onChange={handleTextAreaChange} />;
};

export default Textarea;
