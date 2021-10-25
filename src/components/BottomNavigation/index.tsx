import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type BottomNavigationProps = Partial<{
  css: (theme: Theme) => React.CSSProperties
}>
type RuleNames = 'BottomNavigation'
const useStyles = createUseStyles<RuleNames, BottomNavigationProps, Theme>(theme => ({
  BottomNavigation: ({ css }) => ({
    ...css?.(theme),
  }),
}))

const BottomNavigation = ({
  children,
  css,
  className,
  ...props
}: BottomNavigationProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const classes = useStyles({ css })
  const computedClassNames = classnames(classes.BottomNavigation, className)
  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default BottomNavigation
