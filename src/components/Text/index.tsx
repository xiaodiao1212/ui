import { CSSProperties, useState } from 'react'
import * as React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'
type TextProps = Partial<{
  blod: boolean
  color: string | string
  fontSize: string
  fontWeight: number
  dark: boolean
  span: boolean
  cssOptions?: React.CSSProperties
}>

type RuleNames = 'text'

const useStyles = createUseStyles<RuleNames, TextProps, Theme>((theme) => ({
  text: ({ color, dark, blod, fontWeight, cssOptions, span, ...props }) => ({
    ...props,
    fontWeight: fontWeight || (blod ? '700' : '500'),
    display: span ? 'inline-block' : 'block',
    color:
      color ||
      (dark
        ? theme?.color?.white || '#fff'
        : theme
        ? theme.mode == 'light'
          ? theme.color.black
          : theme.color.white
        : '#111827'),
    // display: "contents",
    ...cssOptions,
  }),
}))

const Text = ({
  dark = false,
  blod = false,
  span = false,
  fontWeight,

  fontSize,
  color,
  children,
  cssOptions,
  className,
  ...props
}: TextProps & React.ComponentProps<'div'>) => {
  const classes = useStyles({
    color,
    fontSize,
    blod,
    span,
    fontWeight,
    dark,
    cssOptions,
  })
  const computedClassNames = classnames(classes.text, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default Text
