/** @jsxImportSource @emotion/react */
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'
import * as React from 'react'

type ButtonProps = {
  padding?: string
  block?: boolean
  disabled?: boolean
  text?: boolean
  outlined?: boolean
  icon?: boolean
  tile?: boolean
  color?: string
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  co,
  icon = false,
  tile = false,
  color,
  padding,
  className,
  children,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {
  const theme = useTheme() as Theme
  const styles = css({
    padding: icon ? '' : '0.6em 1.2em',
    width: block ? '100%' : 'auto',
    border: outlined ? '1px solid ' + (color || theme?.color?.primary || '#231F9C') : 'none',
    borderRadius: tile ? '0px' : '4px',
    background:
      disabled == false
        ? text || outlined || icon
          ? 'transparent'
          : theme
          ? theme.color.primary
          : '#231F9C'
        : theme
        ? theme.color.greyLight
        : '#F3F4F5',
    ...(typeof co == 'function' && co(theme)),
  })

  return (
    <button css={styles} className={clsx(className)} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
