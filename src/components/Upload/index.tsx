/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
type UploadProps = Partial<{
  onlyImg?: boolean;
  className: string;
  children: React.ReactNode;
  onFileChange: (file: Blob, preview: string, e: React.ChangeEvent<HTMLInputElement>) => any;
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
}>;

const Upload = ({
  onlyImg,
  accept,
  onFileChange,
  children,
  co,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & UploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    onFileChange?.(file, URL.createObjectURL(file), e);
  };
  const theme = useTheme() as Theme;
  const styles = css({
    cursor: ' pointer',
    ...(typeof co == 'function' ? co(theme) : co),
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
