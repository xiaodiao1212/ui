import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type ProgressProps = {
  percent?: number
  backgroundColor?: string
  color?: string
  cssOptions?: React.CSSProperties
}
type RuleNames = 'progress'
const useStyles = createUseStyles<RuleNames, ProgressProps, Theme>((theme) => ({
  progress: ({ backgroundColor, color, percent }) => ({
    height: '100%',
    backgroundColor:
      backgroundColor || theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6',
    '& > .progress-bar': {
      height: '100%',
      width: percent + '%',
      backgroundColor: color || theme?.color?.primary || '#231F9C',
    },
  }),
}))
const Progress = ({
  percent = 0,
  backgroundColor,
  color,
  className,
  ...props
}: ProgressProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    backgroundColor,
    color,
    percent,
  })
  const computedClassNames = classnames(classes.progress, className)
  return (
    <div aria-label="progress" role="progressbar" className={computedClassNames} {...props}>
      <div className="progress-bar" />
    </div>
  )
}

export default Progress
