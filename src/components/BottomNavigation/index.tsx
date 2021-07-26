import { useEffect, useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
import palette from '../../constants/palette'

type BottomNavigationProps = Partial<{
  height: string
  shy: boolean
  absolute: boolean
  cssOptions: React.CSSProperties
}>
type RuleNames = 'BottomNavigation' | '@keyframes fadeIn' | '@keyframes fadeOut'
const useStyles = createUseStyles<RuleNames, BottomNavigationProps, Theme>((theme) => ({
  '@keyframes fadeIn': ({ height }) => ({
    from: {
      bottom: '-' + (height || '40%'),
    },
    to: {
      bottom: '0',
    },
  }),
  '@keyframes fadeOut': ({ height }) => ({
    from: {
      bottom: '0',
    },
    to: {
      bottom: '-' + (height || '40%'),
    },
  }),
  BottomNavigation: ({ absolute, cssOptions, height, shy }) => ({
    position: absolute ? 'absolute' : 'fixed',
    backgroundColor: theme.mode == 'light' ? theme.color.white || '#fff' : theme.color.black || '#111827',
    left: 0,
    right: 0,
    bottom: 0,
    height: height || 'initial',
    zIndex: '700',
    ...(shy
      ? {
          webkitAnimation: '$fadeIn 0.5s, $fadeOut 0.5s 2.5s',
          animation: '$fadeIn 0.5s, $fadeOut 0.5s 2.5s',
        }
      : {}),
    ...cssOptions,
  }),
}))

const BottomNavigation = ({
  shy = false,
  height,
  absolute = false,
  children,
  cssOptions,
  className,
  ...props
}: BottomNavigationProps & React.ComponentProps<'aside'>) => {
  const classes = useStyles({ absolute, cssOptions, height, shy })

  const computedClassNames = classnames(classes.BottomNavigation, className)

  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default BottomNavigation
