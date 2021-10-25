/**
 * A slider or track bar is a graphical control element with which a user may set a value by moving an indicator, usually horizontally.
 * In some cases user may also click on a point on the slider to change the setting.
 * It is different from a scrollbar in that it is not continuous but used to adjust a value without changing the format of the display or the other information on the screen.
 */

import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
import { debounce } from '../../utils'
import { clamp } from '../../constants/style'
type SliderProps = Partial<{
  disable: boolean
  defaultValue: number
  step: number
  onSlide: (currentValue: number) => any
  disabled: boolean
  onSlideEnd: () => any
  onSlideStart: () => any
  vertical: boolean
  max: number
  min: number
  backgroundColor: string
  color: string
  className: string
  backgroundcss: (theme: Theme) => React.CSSProperties
  barcss: (theme: Theme) => React.CSSProperties
}>

type RuleNames = 'slider'
const useStyles = createUseStyles<RuleNames, SliderProps & { percent: number; sliderWidth: number }, Theme>(theme => ({
  slider: ({ backgroundColor, sliderWidth, percent, color, backgroundcss, barcss }) => ({
    height: '1em',
    position: 'relative',
    borderRadius: '16px',
    background:
      backgroundColor || (theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6'),
    ...backgroundcss?.(theme),
    '& > .slider-bar': {
      position: 'absolute',
      height: '1em',
      width: sliderWidth,
      borderRadius: '16px',
      background: color || (theme ? theme.color.primary : '#231F9C'),
      willChange: 'width',
      ...barcss?.(theme),
    },
    '& > .slider-circle': {
      height: '2em',
      width: '2em',
      position: 'absolute',
      borderRadius: '50%',
      left: sliderWidth,
      top: 0,
      border: `2px solid ${color || (theme ? theme.color.primary : '#231F9C')}`,
      background: color || theme?.color?.white || '#fff',
      transform: 'translate3d(-50%,-25%,0)',
      cursor: 'pointer',

      willChange: 'left',
      ...barcss?.(theme),
    },
  }),
}))

const Slider = ({
  defaultValue = 0.3,
  min = 0,
  max = 1,
  step = 0.01,
  disabled,
  onSlide,
  onSlideEnd,
  onSlideStart,
  vertical,
  backgroundColor,
  color,
  className,
  backgroundcss,
  barcss,
  ...props
}: SliderProps) => {
  const ref = React.useRef(null)
  const [startX, setStartX] = React.useState(0)
  const [currentValue, setCurrentValue] = React.useState(defaultValue)
  const [currentX, setCurrentX] = React.useState(0)
  const [currentStep, setCurrentStep] = React.useState(0)
  const [displacement, setDisplacement] = React.useState(0)
  const [stepDis, setStepDis] = React.useState(0)
  const [stepWidth, setStepWidth] = React.useState(0)
  const [sliderWidth, setSliderWidth] = React.useState(0)
  const [percent, setPercent] = React.useState((defaultValue / max) * 100)
  const classes = useStyles({
    backgroundColor,
    percent,
    sliderWidth,
    color,
    backgroundcss,
    barcss,
  })
  const handleSlideStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('stepWidth', stepWidth)

    setCurrentX(Number(e.touches[0].clientX.toFixed(2)))
    onSlideStart?.()
  }

  const handleSlide = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log(1)

    const clientX = Number(e.touches[0].clientX.toFixed(2))
    console.log('clientX', clientX)

    const dis = Number((clientX - currentX).toFixed(2))
    console.log('currentX', currentX)
    console.log('dis', dis)
    setStepDis(dis)

    console.log('displacement', displacement)

    if (dis >= 0) {
      if (displacement > stepWidth) {
        setCurrentStep(v => {
          console.log(clamp(v + 1, 0, max / step))
          return clamp(v + 1, 0, max / step)
        })
        setSliderWidth(v => currentStep * stepWidth)
        setDisplacement(0)
        const currVal = currentStep * step
        setCurrentValue(currVal)
        setCurrentX(clientX)
        onSlide?.(currVal)
      }
    } else {
      if (displacement < -stepWidth) {
        setCurrentStep(v => clamp(v - 1, 0, max / step))
        setSliderWidth(v => currentStep * stepWidth)
        setDisplacement(0)
        const currVal = currentStep * step
        setCurrentValue(currVal)
        setCurrentX(clientX)
        onSlide?.(currVal)
      }
    }
  }

  const handleSlideEnd = () => {
    setSliderWidth(v => currentStep * stepWidth)
    onSlideEnd?.()
  }

  const computedClassNames = classnames(classes.slider, className)

  React.useEffect(() => {
    setStepWidth(Number(((step / max) * (ref.current as any)?.clientWidth).toFixed(2)))
  }, [])

  React.useEffect(() => {}, [displacement])
  return (
    <div ref={ref} aria-label='slider' role='sliderbar' className={computedClassNames} {...props}>
      <div className='slider-bar' />
      {!disabled ? (
        <div
          className='slider-circle'
          onTouchStart={handleSlideStart}
          onTouchMove={handleSlide}
          onTouchEnd={handleSlideEnd}
        />
      ) : (
        <div className='slider-circle' />
      )}
    </div>
  )
}

export default Slider
