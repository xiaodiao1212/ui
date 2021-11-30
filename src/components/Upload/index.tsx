/** @jsxImportSource @emotion/react */
import clsx from 'clsx';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../constants/theme';
import * as React from 'react';
type UploadProps = Partial<{
  className: string;
  children: React.ReactNode;
  onFileChange: (file: Blob, preview: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Upload = ({ onFileChange, children, co, className, ...props }: UploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    onFileChange?.(file, URL.createObjectURL(file), e);
  };
  const theme = useTheme() as Theme;
  const styles = css({
    cursor: ' pointer',
    ...(typeof co == 'function' ? co(theme) : co),
  });
  const computedClassNames = clsx(className);
  return (
    <label css={styles} aria-label='file upload input' className={computedClassNames}>
      <input hidden type='file' onChange={handleFileChange} {...props} />
      {children || 'Upload'}
    </label>
  );
};

export default Upload;
