import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type FloatingWindowProps = Partial<{
  adsorption?: boolean
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
  adsorption = false,
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
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // console.log(e.touches[0].target.clientHeight)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log(e.touches[0])
    console.log(parseFloat(e.touches[0].clientX.toFixed(2)))
  }

  const handleTouchEnd = () => {
    if (adsorption) {
    } else {
    }
  }
  return (
    <aside
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      className={computedClassNames}
      {...props}
    >
      {children}
    </aside>
  )
}

export default FloatingWindow
