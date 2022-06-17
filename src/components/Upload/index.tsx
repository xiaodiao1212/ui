/** @jsxImportSource @emotion/react */
import { Base } from '../props';
import { css as useCSS, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import { useFunctionLikeValue } from '../../styles/css';

type UploadProps = Base &
  Partial<{
    onlyImg?: boolean;
    className: string;
    children: React.ReactNode;
    onFileChange: (file: Blob, preview: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  }>;

const Upload = ({
  onlyImg,
  accept,
  onFileChange,
  children,
  css,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & UploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    onFileChange?.(file, URL.createObjectURL(file), e);
  };
  const theme = useTheme() as Theme;

  const styles = useCSS({
    cursor: ' pointer',
    ...useFunctionLikeValue(theme, css),
  });

  return (
    <label css={styles} aria-label='file upload input'>
      <input
        accept={onlyImg ? 'image/png,image/jpeg,image/jpg' : accept}
        hidden
        type='file'
        onChange={handleFileChange}
        {...props}
      />
      {children || 'Upload'}
    </label>
  );
};

export default Upload;
