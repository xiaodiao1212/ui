import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type RuleNames = 'tooltip'
interface TooltipProps {
  backgroundColor?: string
  color?: string
  info?: React.ReactNode
  width?: string
  show?: boolean
  position?: 'top' | 'left' | 'right' | 'bottom'
  cssOptions?: (theme: Theme) => React.CSSProperties
}
const useStyles = createUseStyles<RuleNames, TooltipProps, Theme>(theme => ({
  tooltip: ({ backgroundColor, color, width, show, position, cssOptions }) => {
    let computedPosition = {}
    let afterPosition = {}
    switch (position) {
      case 'top':
        computedPosition = {
          top: '-3em',
          left: '0.6em',
        }
        afterPosition = {
          top: '2.8em',
          right: '6.5em',
          marginTop: '-7.5px',
          transform: 'rotate(270deg)'
        }
        break
      case 'left':
        computedPosition = {
          top: '-5px',
          left: '-8.5em',
        }
        afterPosition = {
          top: '50%',
          right: '-0.86em',
          marginTop: '-5px',
          transform: 'rotate(180deg)'
        }
        break
      case 'bottom':
        computedPosition = {
          bottom: '-3.5em',
          left: '0.6em',
        }
        afterPosition = {
          top: '-0.2em',
          right: '6.5em',
          marginTop: '-7.5px',
          transform: 'rotate(90deg)'
        }
        break
      case 'right':
        computedPosition = {
          top: '-5px',
          left: '110%',
        }
        afterPosition = {
          top: '50%',
          right: '100%',
          marginTop: '-5px',
        }
        break
      default:
        break
    }
    return {
      position: 'relative',
      display: 'inline-block',
      ...cssOptions?.(theme),
      '& .tooltiptext': {
        visibility: show ? 'visible' : 'hidden',
        fontSize: '12px',
        width: width,
        backgroundColor: backgroundColor,
        color: color,
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px 0',
        position: 'absolute',
        ...computedPosition,
        zIndex: 1,
        '&::after': {
          content: '""',
          position: 'absolute',
          ...afterPosition,
          borderWidth: '5px',
          borderStyle: 'solid',
          borderColor: 'transparent black transparent transparent',
        },
      },
      '&:hover .tooltiptext': {
        visibility: show ? 'visible' : 'hidden',
      },
    }
  },
}))
const Tooltip = ({
  cssOptions,
  children,
  className,
  backgroundColor = '#000',
  color = '#fff',
  width = '60px',
  position = 'right',
  show,
  info,
  ...props
}: TooltipProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    backgroundColor,
    color,
    width,
    info,
    show,
    position,
    cssOptions,
  })
  const computedClassNames = classnames(classes.tooltip, className)
  return (
    <div className={computedClassNames}>
      {children}
      <span className={`tooltiptext`}>{info}</span>
    </div>
  )
}
export default Tooltip
