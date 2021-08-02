import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type BottomNavigationProps = Partial<{
  height: string
  absolute: boolean
  cssOptions: React.CSSProperties
}>
type RuleNames = 'BottomNavigation'
const useStyles = createUseStyles<RuleNames, BottomNavigationProps, Theme>((theme) => ({
  BottomNavigation: ({ absolute, cssOptions, height }) => ({
    position: absolute ? 'absolute' : 'fixed',
    backgroundColor: theme ? (theme.mode == 'light' ? theme.color.white : theme.color.black) : '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    height: height || 'initial',
    zIndex: theme ? theme.zIndex.bottomNavigation : 700,
    ...cssOptions,
  }),
}))

const BottomNavigation = ({
  height,
  absolute = false,
  children,
  cssOptions,
  className,
  ...props
}: BottomNavigationProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const classes = useStyles({ absolute, cssOptions, height })
  const computedClassNames = classnames(classes.BottomNavigation, className)
  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default BottomNavigation
