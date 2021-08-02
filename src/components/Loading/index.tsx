import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type LoadingProps = {
  duration?: string
  className?: string
  width?: string
  backgroudColor?: string
  color?: string
  borderWidth?: string
}

type RuleNames = 'loading' | '@keyframes spin'

const useStyles = createUseStyles<RuleNames, LoadingProps, Theme>((theme) => ({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  loading: ({ borderWidth, width, duration, color, backgroudColor }) => ({
    border: `${borderWidth} solid ${backgroudColor}`,
    borderTop: `${borderWidth} solid ${color}`,
    borderRadius: '50%',
    width: width,
    height: width,
    animation: `$spin ${duration} linear infinite`,
  }),
}))
const Loading = ({
  duration = '1s',
  width = '5em',
  borderWidth = '8px',
  color = '#555',
  backgroudColor = '#f3f3f3',
  className,
}: LoadingProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    backgroudColor,
    color,
    borderWidth,
    width,
    duration,
  })
  const computedClassNames = classnames(classes.loading, className)
  return <div className={computedClassNames} />
}

export default Loading
