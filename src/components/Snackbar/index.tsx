import { useEffect, useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
import palette from '../../constants/palette'

type SnackbarProps = {
  color?: string
  show?: boolean
  delay?: number
  onClose: () => void
}
type RuleNames = 'snackbar' | '@keyframes fadeIn' | '@keyframes fadeOut'
const useStyles = createUseStyles<RuleNames, Omit<SnackbarProps, 'onClose'>, Theme>((theme) => ({
  '@keyframes fadeIn': {
    from: {
      bottom: '0',
      opacity: '0',
    },
    to: {
      bottom: '1em',
      opacity: '1',
    },
  },
  '@keyframes fadeOut': {
    from: {
      bottom: '1em',
      opacity: '1',
    },
    to: {
      bottom: '0',
      opacity: '0',
    },
  },
  snackbar: ({ show, color }) => ({
    visibility: 'hidden',
    backgroundColor: color || theme ? theme.color.black : '#111827',
    color: theme ? (theme.mode == 'light' ? theme.color.white : theme.color.greyLight) : '#fff',

    textAlign: 'center',
    borderRadius: '4px',
    padding: '0.4em',
    position: 'fixed',
    zIndex: theme.zIndex.snackbar,
    left: '30%',
    right: '30%',
    bottom: '1em',
    ...(show
      ? {
          visibility: 'visible',
          webkitAnimation: '$fadeIn 0.5s, $fadeOut 0.5s 2.5s',
          animation: '$fadeIn 0.5s, $fadeOut 0.5s 2.5s',
        }
      : {}),
  }),
}))

const Snackbar = ({
  show = false,
  onClose,
  delay = 3,
  color,
  children,
  className,
  ...props
}: SnackbarProps & React.ComponentPropsWithoutRef<'aside'>) => {
  const classes = useStyles({ show, color })

  const computedClassNames = classnames(classes.snackbar, className)

  useEffect(() => {
    if (show == true)
      setTimeout(() => {
        onClose()
      }, delay * 900)
  }, [show])

  return (
    <aside className={computedClassNames} {...props}>
      {children}
    </aside>
  )
}

export default Snackbar
