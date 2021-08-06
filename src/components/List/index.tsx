import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type ListProps = {
  cssOptions?: (theme: Theme) => React.CSSProperties
}

type ListItemProps = {
  swipe?: boolean
  onSwipe?: () => any
  onSwipeStart?: () => any
  onSwipeEnd?: () => any
  className?: string
  children?: React.ReactNode
  cssOptions?: (theme: Theme) => React.CSSProperties
}

const useListStyles = createUseStyles<'list', Pick<ListProps, 'cssOptions'>, Theme>((theme) => ({
  list: ({ cssOptions }) => {
    return {
      ...cssOptions?.(theme),
    }
  },
}))

const useListItemStyles = createUseStyles<'list-item', Pick<ListProps, 'cssOptions'> & { translateX: number }, Theme>(
  (theme) => ({
    'list-item': ({ cssOptions, translateX }) => {
      console.log('translateX', translateX)

      return {
        position: 'relative',
        overflow: 'hidden',
        transform: `translate3d(-${translateX}px,0,0)`,
        ...cssOptions?.(theme),
        '& > *': {
          position: 'absolute',
          transform: 'translate3d(-100%,0,0)',
        },
      }
    },
  }),
)
const List = ({ cssOptions, className, children, ...props }: ListProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useListStyles({
    cssOptions,
  })

  const computedClassNames = classnames(classes.list, className)

  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

const ListItem = ({ swipe, onSwipeStart, onSwipe, onSwipeEnd, children, className, cssOptions }: ListItemProps) => {
  const [translateX, setTranslateX] = useState(0)
  const [startX, setStartX] = useState(0)
  const classes = useListItemStyles({
    translateX,
    cssOptions,
  })

  const computedClassNames = classnames(classes['list-item'], className)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX)
    onSwipeStart?.()
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    length = Math.max(0, parseFloat((startX - e.touches[0].clientX).toFixed(2)))
    setTranslateX(length)
    onSwipe?.()
  }
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    onSwipeEnd?.()
  }

  const props = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  }
  return (
    <div {...(swipe ? props : {})} className={computedClassNames}>
      {children}
    </div>
  )
}
List.Item = ListItem
export default List
