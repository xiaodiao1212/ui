import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type SkeletonProps = {
  duration?: number
  delay?: number
  circle?: boolean
  width?: string
  height?: string
}
type RuleNames = 'skeleton' | 'skeleton-circle' | '@keyframes loading'
const useStyles = createUseStyles<RuleNames, SkeletonProps, Theme>((theme) => ({
  skeleton: (props) => ({
    minHeight: '2em',
    borderRadius: '4px',
    background:
      'linear-gradient(90deg,rgba(255, 255, 255, 0) 40%,rgba(255, 255, 255, .5) 50%,rgba(255, 255, 255, 0) 60%) ' +
        theme?.palette?.grey[300] || '#e0e0e0',
    backgroundSize: '200% 100%',
    backgroundPositionX: '180%',
    animation: props.duration + 's $loading ease-in-out infinite',
    animationDelay: props.delay + 's',
  }),
  'skeleton-circle': (props) => ({
    width: props.width,
    height: props.height,
    border: '1px solid ' + theme?.palette?.grey[300] || '#e0e0e0',
    borderRadius: '50%',
  }),
  '@keyframes loading': {
    to: {
      backgroundPositionX: '-20%',
    },
  },
}))
const Skeleton = ({
  duration = 1,
  delay = 0,
  circle = false,
  style,
  width,
  height,
  className,
  ...props
}: SkeletonProps & React.ComponentProps<'div'>) => {
  const classes = useStyles({
    duration,
    delay,
    height,
    width,
  })
  const computedClassNames = classnames(classes.skeleton, className)
  const cnsCircle = classnames(classes.skeleton, classes['skeleton-circle'], className)
  return <div data-testid="skeleton" className={circle ? cnsCircle : computedClassNames} {...props} />
}

export default Skeleton
