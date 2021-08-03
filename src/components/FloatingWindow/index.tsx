import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type FloatingWindowProps = Partial<{
  draggable?: boolean
  cssOptions: (theme: Theme) => React.CSSProperties
  position?: {
    left?: number | string
    top?: number | string
    right?: number | string
    bottom?: number | string
  }
}>
const useStyles = createUseStyles<'floating-window', FloatingWindowProps, Theme>((theme) => ({
  'floating-window': ({ position, cssOptions }) => ({
    position: 'fixed',
    left: 0,
    top: 0,
    ...position,
    zIndex: theme ? theme.zIndex.floatingWindow : 700,
    ...cssOptions?.(theme),
  }),
}))

const FloatingWindow = ({
  draggable = false,
  position = {
    left: 0,
    top: 0,
  },
  children,
  cssOptions,
  className,
  ...props
}: FloatingWindowProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const [computedPosition, setComputedPosition] = React.useState(position)
  const classes = useStyles({ position: computedPosition, cssOptions })
  const computedClassNames = classnames(classes['floating-window'], className)
  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default FloatingWindow
