import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

interface OverlayProps {
  show: boolean
  opacity?: string | number
  onClick?: (e: any) => any
  cssOptions?: React.CSSProperties
  className?: string
}

type RuleNames = 'overlay'

const useStyles = createUseStyles<RuleNames, Omit<OverlayProps, 'onClick'>, Theme>((theme) => ({
  overlay: ({ cssOptions, opacity, show }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: theme.palette.common.black,
    zIndex: theme.zIndex.overlay,
    opacity: 0,

    transition: 'all .4s',
    ...(show ? { opacity: opacity } : { display: 'none' }),
    ...cssOptions,
  }),
}))

const Overlay = ({ opacity = 0.46, show = false, onClick, cssOptions, className }: OverlayProps) => {
  const classes = useStyles({ show, opacity, cssOptions })
  const cns = classnames(classes.overlay, { [`${className}`]: true })
  const handleClickOverlay = (e: any) => {
    onClick?.(e)
  }
  return <aside className={cns} onClick={handleClickOverlay} />
}

export default Overlay
