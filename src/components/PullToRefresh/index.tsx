import { useEffect, useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type PullToRefreshProps = {
  triggerValue?: number
  delay?: number
  onPullStart?: () => any
  onPull?: (pullLength: number) => any
  onPullEnd?: () => any
  onRefresh?: (refreshOver: () => any) => any
  refreshLoading?: React.ReactNode
  cssOptions?: React.CSSProperties
}
type RuleNames = 'pullToRefresh' | 'refresh-loading'
const useStyles = createUseStyles<
  RuleNames,
  Pick<PullToRefreshProps, 'cssOptions' | 'triggerValue'> & {
    translateY: number
  },
  Theme
>((theme) => ({
  'refresh-loading': ({ translateY, triggerValue, cssOptions }) => {
    const pullToRefreshStyle: React.CSSProperties = {
      transform: `translate3d(0px, ${-(triggerValue as number) + translateY}px, 0px)`,
      // maxHeight: triggerValue,
      height: translateY,
      transition: '.3s all cubic-bezier(0, 0, 0.19, 1.25)',
      // display: translateY > (triggerValue as number) / 4 ? "block" : "none",
      ...cssOptions,
    }
    return pullToRefreshStyle
  },
  pullToRefresh: ({ translateY, triggerValue }) => {
    const pullToRefreshStyle: React.CSSProperties = {
      height: '100%',
      overflow: 'hidden',
      // transition: '.3s transform cubic-bezier(0, 0, 0.19, 1.25)',
      // transform: `translate3d(0px, ${translateY - (triggerValue as number)}px, 0px)`,
      cursor: 'grab',
    }
    return pullToRefreshStyle
  },
}))
const PullToRefresh = ({
  triggerValue = 80,
  delay = 30,
  onPull,
  onPullStart,
  onPullEnd,
  onRefresh,
  refreshLoading,
  className,
  children,
  cssOptions,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PullToRefreshProps) => {
  const [pullLength, setPullLength] = useState(0)
  const [isRefresh, setIsRefresh] = useState(false)
  const [translateY, setTranslateY] = useState(0)
  const [startY, setStartY] = useState(0)
  const classes = useStyles({
    translateY,
    triggerValue,
    cssOptions,
  })
  const computedRefreshClassNames = classnames(classes.pullToRefresh, className)
  const computedLoadingClassNames = classnames(classes['refresh-loading'], className)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].pageY)
    onPullStart?.()
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startY != 0) {
      length = Math.max(0, parseFloat((e.touches[0].clientY - startY).toFixed(2)))
      const pl = Math.min(triggerValue + delay, length)
      setTranslateY(pl > (delay as number) ? pl - (delay as number) : 0)
      setPullLength(length)
      onPull?.(length)
    }
  }

  const handleReset = () => {
    setStartY(0)
    setTranslateY(0)
    setPullLength(0)
  }

  const handleTouchEnd = () => {
    onPullEnd?.()
    if (pullLength >= triggerValue + delay) {
      const ty = ((translateY / 1.2).toFixed(2) as any) * 1
      setTranslateY(ty)
      setIsRefresh(true)
      onRefresh?.(() => setIsRefresh(false))
    } else {
      handleReset()
    }
  }

  useEffect(() => {
    if (!isRefresh) {
      handleReset()
    }
  }, [isRefresh])

  return (
    <div
      className={computedRefreshClassNames}
      onScroll={() => {}}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd()}
      {...props}
    >
      <div className={computedLoadingClassNames}>{refreshLoading}</div>
      {React.cloneElement(children as React.DetailedReactHTMLElement<any, HTMLElement>, {
        style:
          translateY > 0
            ? {
                overflow: 'hidden',
              }
            : {},
      })}
    </div>
  )
}

export default PullToRefresh
