import { keyframes } from '@emotion/react';
const rotate = (start: number = 0, end: number = 360) =>
  keyframes({
    '0%': {
      transform: `rotate(${start}deg)`,
    },
    '100%': {
      transform: `rotate(${end}deg)`,
    },
  });
export { rotate };
