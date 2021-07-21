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
  backgroundColor?: string
  borderRadius?: string
  color?: string
  flat?: boolean
  cssOptions?: React.CSSProperties
}
type RuleNames = 'button'

const useStyles = createUseStyles<RuleNames, ButtonProps, Theme>((theme) => ({
  button: ({
    block,
    color,
    tile,
    cssOptions,
    padding,
    icon,
    disabled,
    borderRadius,
    flat,
    text,
    outlined,
    backgroundColor,
  }) => ({
    padding: icon ? '' : '0.6em 1.2em',
    width: block ? '100%' : 'auto',
    border: outlined ? '1px solid ' + (color || theme.colorPrimary || '#333') : 'none',
    borderRadius: tile ? theme.borderRadius0 || '0px' : borderRadius || theme.borderRadiusDefault || '4px',
    color: text
      ? color || theme.colorPrimary || '#333'
      : color || outlined
      ? theme.colorPrimary
      : theme.colorTextInLight || '#fff',
    backgroundColor:
      disabled == false
        ? text || outlined || icon
          ? 'transparent'
          : backgroundColor || theme.colorPrimary
        : theme.palette.grey[400],
    ...cssOptions,
  }),
}))

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
      borderRadius,
      backgroundColor,
      flat = true,
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
      flat,
      disabled,
      text,
      cssOptions,
      outlined,
      backgroundColor,
      borderRadius,
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
