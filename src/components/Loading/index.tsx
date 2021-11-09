import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type LoadingProps = {
  bit?: boolean
  duration?: string
  className?: string
  width?: string
  backgroudColor?: ((theme: Theme) => string) | string
  color?: ((theme: Theme) => string) | string
  borderWidth?: string
  cssOptions?: (theme: Theme) => React.CSSProperties
}

type RuleNames = 'loading' | '@keyframes spin'

const useStyles = createUseStyles<RuleNames, LoadingProps, Theme>(theme => ({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes bit': {
    '0%, 20%, 80%, 100%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.5)',
    },
  },
  loading: ({ borderWidth, width, duration, color, backgroudColor, cssOptions }) => ({
    ...cssOptions?.(theme),
    '& .nomal': {
      border: `${borderWidth} solid ${typeof backgroudColor == 'string' ? backgroudColor : backgroudColor?.(theme)}`,
      borderTop: `${borderWidth} solid ${typeof color == 'string' ? color : color?.(theme)}`,
      borderRadius: '50%',
      width: width,
      height: width,
      animation: `$spin ${duration} linear infinite`,
    },
    '& .bit': {
      display: 'inline-block',
      position: 'relative',
      width: width,
      height: width,
      '& span': {
        position: 'absolute',
        width: '6px',
        height: '6px',
        background: color,
        borderRadius: '50%',
        animation: `$bit ${duration} linear infinite`,
        '&:nth-child(1)': {
          animationDelay: '0s',
          top: '37px',
          left: '66px',
        },
        '&:nth-child(2)': {
          animationDelay: '-0.1s',
          top: '22px',
          left: '62px',
        },
        '&:nth-child(3)': {
          animationDelay: '-0.2s',
          top: '11px',
          left: '52px',
        },
        '&:nth-child(4)': {
          animationDelay: '-0.3s',
          top: '7px',
          left: '37px',
        },
        '&:nth-child(5)': {
          animationDelay: '-0.4s',
          top: '11px',
          left: '22px',
        },
        '&:nth-child(6)': {
          animationDelay: '-0.5s',
          top: '22px',
          left: '11px',
        },
        '&:nth-child(7)': {
          animationDelay: '-0.6s',
          top: '37px',
          left: '7px',
        },
        '&:nth-child(8)': {
          animationDelay: '-0.7s',
          top: '52px',
          left: '11px',
        },
        '&:nth-child(9)': {
          animationDelay: '-0.8s',
          top: '62px',
          left: '22px',
        },
        '&:nth-child(10)': {
          animationDelay: '-0.9s',
          top: '66px',
          left: '37px',
        },
        '&:nth-child(11)': {
          animationDelay: '-1s',
          top: '62px',
          left: '52px',
        },
        '&:nth-child(12)': {
          animationDelay: '-1.1s',
          top: '52px',
          left: '62px',
        },
      },
    },
  }),
}))
const Loading = ({
  duration = '1.2s',
  width = '4em',
  borderWidth = '2px',
  color = '#555',
  backgroudColor = '#f3f3f3',
  bit = false,
  cssOptions,
  className,
}: LoadingProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    backgroudColor,
    color,
    borderWidth,
    width,
    cssOptions,
    duration,
    bit,
  })
  const computedClassNames = classnames(classes.loading, className)
  return (
    <div className={computedClassNames}>
      {!bit ?
      <div className={`nomal`} />
      :
      <div className={`bit`}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        </div>
}
    </div>
   )
}

export default Loading
