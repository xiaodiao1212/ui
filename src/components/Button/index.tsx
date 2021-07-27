import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '../../constants/theme'
type ButtonProps = {
  padding?: string
  block?: boolean
  disabled?: boolean
  text?: boolean
  outlined?: boolean
  icon?: boolean
  tile?: boolean
  color?: string
  cssOptions?: React.CSSProperties
}
type RuleNames = 'button'

const useStyles = createUseStyles<RuleNames, ButtonProps, Theme>(
  (theme) => ({
    button: ({ block, color, tile, cssOptions, icon, disabled, text, outlined }) => ({
      padding: icon ? '' : '0.6em 1.2em',
      width: block ? '100%' : 'auto',
      border: outlined ? '1px solid ' + (color || theme?.color?.primary || '#231F9C') : 'none',
      borderRadius: tile ? '0px' : '4px',
      color: theme.mode == 'light' ? theme.color.white || '#fff' : theme.color.black || '#111827',
      backgroundColor:
        disabled == false
          ? text || outlined || icon
            ? 'transparent'
            : theme
            ? theme.color.primary
            : '#231F9C'
          : theme
          ? theme.color.greyLight
          : '#F3F4F5',
      ...cssOptions,
    }),
  }),
  { name: 'Button', classNamePrefix: 'Button' },
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & React.ComponentPropsWithoutRef<'button'>>(
  (
    {
      block = false,
      disabled = false,
      text = false,
      outlined = false,
      cssOptions,
      icon = false,
      tile = false,
      color,
      padding,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({
      theme,
      color,
      block,
      tile,
      icon,
      disabled,
      text,
      cssOptions,
      outlined,
      padding,
    })

    const computedClassNames = classnames(classes.button, className)
    return (
      <button ref={ref} className={computedClassNames} disabled={disabled} {...props}>
        {children}
      </button>
    )
  },
)

export default Button
