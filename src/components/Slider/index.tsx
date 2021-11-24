/** @jsxImportSource @emotion/react */
/**
 * In webkit based browsers, the track is styled with a special pseudo selector ::-webkit-slider-runnable-track, and the thumb with ::webkit-slider-thumb.
 */
import { css, useTheme } from '@emotion/react'
import clsx from 'clsx'

type SliderProps = Partial<{
  style: string | React.CSSProperties
  disable: boolean
  defaultValue: string
  step: string
  onChange: (value: any) => any
  max: string
  min: string
  trackColor: string
  thumbColor: string
  trackHeight: number
  thumbHeight: number
  className: string
}>

const Slider = ({
  max,
  min,
  step,
  defaultValue,
  onChange,
  trackColor,
  thumbColor,
  trackHeight = 10,
  thumbHeight = 15,
  className,
}: SliderProps) => {
  const theme = useTheme()

  const handleOnChange = (e: { target: { value: string } }) => {
    onChange?.(e.target.value)
  }

  const sliderStyles = css`
    input[type='range'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      border: none;
    }

    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: ${trackHeight}px;
      background: ${trackColor};
      border-radius: 16px;
    }

    input[type='range']::-moz-range-track {
      width: 100%;
      height: ${trackHeight}px;
      background: ${trackColor};
      border-radius: 16px;
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: ${thumbHeight}px;
      border-radius: 50%;
      background: ${thumbColor};
      height: ${thumbHeight}px;
      margin-top: -${(thumbHeight - trackHeight) / 2}px;
    }

    input[type='range']::-moz-range-thumb {
      -moz-appearance: none;
      outline: none;
      border: none;
      width: ${thumbHeight}px;
      border-radius: 50%;
      background: ${thumbColor};
      height: ${thumbHeight}px;
      margin-top: -${(thumbHeight - trackHeight) / 2}px;
    }

    input[type='range']:focus {
      outline: none;
    }

    input[type='range']:focus::-moz-range-track {
      background: ${trackColor};
    }

    input[type='range']:focus::-webkit-slider-runnable-track {
      background: ${trackColor};
    }
  `

  return (
    <div css={sliderStyles}>
      <input
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        type='range'
        onChange={handleOnChange}
        className={clsx(className)}
      />
    </div>
  )
}

export default Slider
