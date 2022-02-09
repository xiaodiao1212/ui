/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

type CenterProps = Partial<{
  children: React.ReactNode;
}>;

const Center = ({ children }: CenterProps) => {
  const styles = css({
    display: 'flex',
    alignItems: 'center',
  });

  return <div css={styles}>{children}</div>;
};

export default Center;
