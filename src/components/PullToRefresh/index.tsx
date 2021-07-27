import { useEffect, useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type PullToRefreshProps = {
  triggerValue?: number
  onPullStart?: () => any
  onPull?: (pullLength: number) => any
  onPullEnd?: () => any
  onRefresh?: (refreshOver: () => any) => any
  cssOptions?: React.CSSProperties
}
type RuleNames = 'pullToRefresh'
const useStyles = createUseStyles<RuleNames, Pick<PullToRefreshProps, 'cssOptions'> & { translateY: number }, Theme>(
  (theme) => ({
    pullToRefresh: ({ translateY, cssOptions }) => {
      const pullToRefreshStyle: React.CSSProperties = {
        height: '100%',
        transition: '.2s transform cubic-bezier(0, 0, 0.19, 1.25)',
        transform: `translate3d(0px, ${translateY}px, 0px)`,
        cursor: 'grab',
        ...cssOptions,
      }
      return pullToRefreshStyle
    },
  }),
)
const PullToRefresh = ({
  triggerValue = 100,
  onPull,
  onPullStart,
  onPullEnd,
  onRefresh,
  className,
  children,
  cssOptions,
  ...props
}: React.ComponentProps<'div'> & PullToRefreshProps) => {
  const [pullLength, setPullLength] = useState(0)
  const [isRefresh, setIsRefresh] = useState(false)
  const [translateY, setTranslateY] = useState(0)
  const [startY, setStartY] = useState(0)
  const classes = useStyles({ translateY, cssOptions })
  const computedClassNames = classnames(classes.pullToRefresh, className)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].pageY)
    onPullStart?.()
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startY != 0 && !e.isDefaultPrevented()) {
      length = Math.max(0, parseFloat((e.touches[0].clientY - startY).toFixed(2)))
      console.log('length', length)

      const pl = Math.min(triggerValue, length)
      setTranslateY(pl)
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
    if (pullLength >= triggerValue) {
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
      className={computedClassNames}
      onScroll={() => {
        console.log('refresh scroll')
      }}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd()}
      {...props}
    >
      {React.cloneElement(children as React.FunctionComponentElement<{ cssOptions: React.CSSProperties }>, {
        cssOptions: {
          // overflow: pullLength > 0 ? 'hidden' : '',
        },
      })}
    </div>
  )
}

export default PullToRefresh
