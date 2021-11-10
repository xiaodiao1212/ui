import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type TabBarProps = Partial<{
  cssOptions: (theme: Theme) => React.CSSProperties
}>
type RuleNames = 'TabBar'
const useStyles = createUseStyles<RuleNames, TabBarProps, Theme>(theme => ({
  TabBar: ({ cssOptions }) => ({
    ...cssOptions?.(theme),
  }),
}))

const TabBar = ({
  children,
  cssOptions,
  className,
  ...props
}: TabBarProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const classes = useStyles({ cssOptions })
  const computedClassNames = classnames(classes.TabBar, className)
  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default TabBar
