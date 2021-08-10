import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type SliderProps = {
  percent?: number
  backgroundColor?: string
  color?: string
  backgroundCssOptions?: (theme: Theme) => React.CSSProperties
  barCssOptions?: (theme: Theme) => React.CSSProperties
}
type RuleNames = 'slider'
const useStyles = createUseStyles<RuleNames, SliderProps, Theme>((theme) => ({
  slider: ({ backgroundColor, color, percent, backgroundCssOptions, barCssOptions }) => ({
    height: '100%',
    backgroundColor:
      backgroundColor || theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6',
    ...backgroundCssOptions?.(theme),
    '& > .slider-bar': {
      height: '100%',
      width: percent + '%',
      backgroundColor: color || theme?.color?.primary || '#231F9C',
      ...barCssOptions?.(theme),
    },
  }),
}))
const Slider = ({
  percent = 0,
  backgroundColor,
  color,
  className,
  backgroundCssOptions,
  barCssOptions,
  ...props
}: SliderProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    backgroundColor,
    color,
    percent,
    backgroundCssOptions,
    barCssOptions,
  })
  const computedClassNames = classnames(classes.slider, className)
  return (
    <div aria-label="slider" role="sliderbar" className={computedClassNames} {...props}>
      <div className="slider-bar" />
    </div>
  )
}

export default Slider
