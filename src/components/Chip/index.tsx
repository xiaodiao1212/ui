/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme'
import React from 'react'
import clsx from 'clsx'
import { useTheme, css } from '@emotion/react'

type ChipProps = {
  outline?: boolean
  color?: string
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

/**
 * Chips are compact elements that represent an input, attribute, or action.
 * @param boolean outline
 * @param string color
 */
const Chip = ({
  outline = false,
  color,
  co,
  children,
  className,
  ...props
}: ChipProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme
  const getComputedColor = (color?: string) =>
    color || (theme ? (theme.mode == 'light' ? theme.color.black : theme.color.white) : '#111827')
  const computedClassNames = clsx(className)
  const styles = css({
    display: 'inline-block',
    padding: '0.1em 0.5em',
    borderRadius: '16px',
    ...(!outline
      ? {
          backgroundColor: getComputedColor(color),
          color: theme ? theme.color.white : '#fff',
        }
      : {
          border: '1px solid ' + getComputedColor(color),
          color: getComputedColor(color),
        }),
    ...(typeof co == 'function' && co(theme)),
  })
  return (
    <span css={styles} className={computedClassNames} {...props}>
      {children}
    </span>
  )
}

export default Chip
