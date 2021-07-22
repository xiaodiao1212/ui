import { useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import palette from '../../constants/palette'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'

type AppBarProps = {
  fixed?: boolean
  backgroundColor?: string
  cssOptions?: React.CSSProperties
} & React.ComponentPropsWithoutRef<'div'>

type RuleNames = 'AppBar'

const useStyles = createUseStyles<RuleNames, AppBarProps, Theme>((theme) => ({
  AppBar: ({ backgroundColor, cssOptions, fixed }) => ({
    height: '3em',
    backgroundColor:
      backgroundColor || (theme.mode == 'light' ? theme.color.white || '#fff' : theme.color.black || '#111827'),
    ...(fixed
      ? {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar || 700,
        }
      : {}),
    ...cssOptions,
  }),
}))
const AppBar = ({ fixed, backgroundColor, cssOptions, className, children, ...props }: AppBarProps) => {
  const classes = useStyles({ fixed, backgroundColor, cssOptions })
  const computedClassNames = classnames(classes.AppBar, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default AppBar
