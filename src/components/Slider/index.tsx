/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { useStyles } from '../../hooks'
import { useState, useEffect, useRef } from 'react'
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
}>

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
  ...props
}: SliderProps) => {
  const ref = useRef(null)
  const [lastX, setLastX] = useState(0)
  const [currentValue, setCurrentValue] = useState(defaultValue)
  const [currentX, setCurrentX] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [displacement, setDisplacement] = useState(0)
  const [stepWidth, setStepWidth] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [percent, setPercent] = useState((defaultValue / max) * 100)

  const handleSlideStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('stepWidth', stepWidth)

    setCurrentX(Number(e.touches[0].clientX.toFixed(2)))
    onSlideStart?.()
  }

  const handleSlide = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log(1)

    const clientX = Number(e.touches[0].clientX.toFixed(2))
    const dis = Number((clientX - lastX).toFixed(2))
    setDisplacement(v => v + dis)
    console.log('dis', dis)
    console.log('sliderWidth', sliderWidth)

    if (dis >= 0) {
      if (displacement > stepWidth) {
        setCurrentStep(v => clamp(v + 1, 0, max / step))
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
    setLastX(clientX)
  }

  const handleSlideEnd = () => {
    setSliderWidth(v => currentStep * stepWidth)
    onSlideEnd?.()
  }

  useEffect(() => {
    setStepWidth(Number(((step / max) * (ref.current as any)?.clientWidth).toFixed(2)))
  }, [])

  return (
    <div
      css={{
        height: '1em',
        position: 'relative',
        borderRadius: '16px',
        background: backgroundColor || '#F3F4F6',
      }}
      ref={ref}
      aria-label='slider'
      role='sliderbar'
      {...props}>
      <div
        css={{
          position: 'absolute',
          height: '1em',
          width: sliderWidth,
          borderRadius: '16px',
          background: color || '#231F9C',
          willChange: 'width',
        }}
      />

      <div
        css={{
          height: '2em',
          width: '2em',
          position: 'absolute',
          borderRadius: '50%',
          left: sliderWidth,
          top: 0,
          border: `2px solid ${color || '#231F9C'}`,
          background: color || '#fff',
          transform: 'translate3d(-50%,-25%,0)',
          cursor: 'pointer',

          willChange: 'left',
        }}
        onTouchStart={handleSlideStart}
        onTouchMove={handleSlide}
        onTouchEnd={handleSlideEnd}
      />
    </div>
  )
}

export default Slider
