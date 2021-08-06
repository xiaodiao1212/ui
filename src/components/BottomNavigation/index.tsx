import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type BottomNavigationProps = Partial<{
  absolute: boolean
  cssOptions: (theme: Theme) => React.CSSProperties
}>
type RuleNames = 'BottomNavigation'
const useStyles = createUseStyles<RuleNames, BottomNavigationProps, Theme>((theme) => ({
  BottomNavigation: ({ absolute, cssOptions }) => ({
    position: absolute ? 'absolute' : 'fixed',
    backgroundColor: theme ? (theme.mode == 'light' ? theme.color.white : theme.color.black) : '#6b7280',
    left: 0,
    right: 0,
    bottom: 0,
    height: theme?.bottomNavigation?.height || '3em',
    zIndex: theme ? theme.zIndex.bottomNavigation : 700,
    ...cssOptions?.(theme),
  }),
}))

const BottomNavigation = ({
  absolute = false,
  children,
  cssOptions,
  className,
  ...props
}: BottomNavigationProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const classes = useStyles({ absolute, cssOptions })
  const computedClassNames = classnames(classes.BottomNavigation, className)
  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default BottomNavigation
