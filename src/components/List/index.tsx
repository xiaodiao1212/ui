import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type ListProps = {
  triggerValue?: number
  onScrollToBottom?: (handleScrollToBottomOver: () => any) => any
  fetchNode?: React.ReactNode
  cssOptions?: React.CSSProperties
}

type RuleNames = 'list'

const useStyles = createUseStyles<RuleNames, Pick<ListProps, 'cssOptions'>, Theme>((theme) => ({
  list: ({ cssOptions }) => {
    return {
      height: '100%',
      overflow: 'auto',
      ...cssOptions,
    }
  },
}))
const List = ({
  fetchNode,
  triggerValue = 40,
  onScrollToBottom,
  cssOptions,
  className,
  children,
  ...props
}: ListProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    cssOptions,
  })

  const clsns = classnames(classes.list, className)
  const [scrollTop, setScrollTop] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const handleScrollToBottomOver = () => {
    setIsFetching(false)
  }

  const handleScrollToBottom = () => {
    onScrollToBottom?.(handleScrollToBottomOver)
  }

  const handleScroll = (e: any) => {
    const element = e.target
    setScrollTop(element.scrollTop)
    if (element.scrollTop + element.clientHeight + triggerValue < element.scrollHeight || isFetching) return
    setIsFetching(true)
  }
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollTop > 0 && isTouch) e.stopPropagation()
    setIsTouch(true)
  }
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollTop > 0 && isTouch) e.stopPropagation()
  }
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouch(false)
  }
  useEffect(() => {
    if (!isFetching) return
    handleScrollToBottom()
  }, [isFetching])

  return (
    <div
      onScroll={handleScroll}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      className={clsns}
      {...props}
    >
      {children}
      {isFetching && fetchNode}
    </div>
  )
}

export default List
