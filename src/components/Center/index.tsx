/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import { Base } from '../props';
type CenterProps = Base;

const Center = ({ children }: CenterProps) => {
  const styles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cener',
  });

  return <div css={styles}>{children}</div>;
};

export default Center;
