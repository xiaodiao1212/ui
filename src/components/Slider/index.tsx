import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
import { debounce, clamp } from '../../utils'
type SliderProps = Partial<{
  disable: boolean
  defaultValue: number
  step: number
  onSlide: (value: number) => any
  onSlideEnd: () => any
  onSlideStart: () => any
  max: number
  min: number
  backgroundColor: string
  color: string
  backgroundCssOptions: (theme: Theme) => React.CSSProperties
  barCssOptions: (theme: Theme) => React.CSSProperties
  circleCssOptions: (theme: Theme) => React.CSSProperties
}>

type RuleNames = 'slider'
const useStyles = createUseStyles<RuleNames, SliderProps & { percent: number }, Theme>(theme => ({
  slider: ({ backgroundColor, percent, color, backgroundCssOptions, barCssOptions, circleCssOptions }) => ({
    height: '1em',
    position: 'relative',
    borderRadius: '16px',
    background:
      backgroundColor || (theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6'),
    ...backgroundCssOptions?.(theme),
    '& > .slider-bar': {
      position: 'absolute',
      height: '1em',
      width: percent + '%',
      borderRadius: '16px',
      background: color || (theme ? theme.color.primary : '#231F9C'),
      willChange: 'width',
      ...barCssOptions?.(theme),
    },
    '& > .slider-circle': {
      height: '2em',
      width: '2em',
      position: 'absolute',
      borderRadius: '50%',
      left: percent + '%',
      top: 0,
      background: color || theme?.color?.white || '#fff',
      transform: 'translate3d(-50%,-25%,0)',
      cursor: 'pointer',
      willChange: 'left',
      ...circleCssOptions?.(theme),
    },
  }),
}))

const Slider = ({
  defaultValue = 0.3,
  min = 0,
  max = 1,
  step = 0.01,
  onSlide,
  onSlideEnd,
  onSlideStart,
  backgroundColor,
  color,
  className,
  backgroundCssOptions,
  circleCssOptions,
  barCssOptions,
  ...props
}: SliderProps & React.ComponentPropsWithoutRef<'div'>) => {
  console.log('defaultValue', defaultValue)

  const ref = React.useRef(null)
  const [startX, setStartX] = React.useState(0)
  const [currentValue, setCurrentValue] = React.useState(defaultValue * 1)
  const [stepLength, setStepLength] = React.useState(0)
  const [disStack, setDisStack] = React.useState(0)
  const [offset, setOffset] = React.useState(0)
  const [useOffset, setUseOffset] = React.useState(false)
  const [stepPercent, setStepPercent] = React.useState(0)
  const [percent, setPercent] = React.useState(((defaultValue - min) / (max - min)) * 100)
  const classes = useStyles({
    backgroundColor,
    percent,
    color,
    backgroundCssOptions,
    circleCssOptions,
    barCssOptions,
  })
  const handleSlideStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX)
    onSlideStart?.()
  }
  const handleSlide = (e: React.TouchEvent<HTMLDivElement>) => {
    const disFrag = parseFloat((e.touches[0].clientX - startX).toFixed(2))
    let ds = disStack

    if (disFrag >= 0) {
      ds = disStack + disFrag
      if (ds >= stepLength) {
        setDisStack(0)
        setDisStack(0)
        setPercent(v => clamp(v + stepPercent, 0, 100))
        // if (!useOffset) {
        //   setUseOffset(true)
        //   setOffset(-stepLength / 2)
        // } else {
        //   setUseOffset(false)
        //   setOffset(0)
        // }
        console.log(currentValue)
        console.log(step)
        console.log(currentValue + step)

        const cv = clamp(parseFloat((currentValue + step).toFixed(2)), min, max)
        setCurrentValue(cv)
        onSlide?.(cv)
      } else {
        setDisStack(ds)
      }
    } else {
      ds = disStack + Math.abs(disFrag)
      if (ds > stepLength) {
        setPercent(v => clamp(v - stepPercent, 0, 100))
        setDisStack(0)
        // if (!useOffset) {
        //   setUseOffset(true)
        //   setOffset(-50)
        // } else {
        //   setUseOffset(false)
        //   setOffset(0)
        // }
        const cv = clamp(parseFloat((currentValue - step).toFixed(2)), min, max)
        setCurrentValue(cv)
        onSlide?.(cv)
      } else {
        setDisStack(ds)
      }
    }
    setStartX(e.touches[0].clientX)
  }

  const handleSlideEnd = () => {
    setDisStack(0)
    onSlideEnd?.()
  }
  const computedClassNames = classnames(classes.slider, className)

  React.useEffect(() => {
    setStepLength((step / max) * (ref.current as any)?.clientWidth)
    setStepPercent((step / (max - min)) * 100)
  }, [])
  return (
    <div ref={ref} aria-label='slider' role='sliderbar' className={computedClassNames} {...props}>
      <div className='slider-bar' />
      <div
        className='slider-circle'
        onTouchStart={handleSlideStart}
        onTouchMove={handleSlide}
        onTouchEnd={handleSlideEnd}
      />
    </div>
  )
}

export default Slider
