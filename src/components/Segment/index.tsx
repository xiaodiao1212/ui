import * as React from 'react'
import classnames from 'classnames'
import { theme, Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'
import Button from '../Button'

interface SegmentProps {
  noIndicator?: boolean
  onClickTab: (key: React.Key) => void
  cssOptions?: (theme: Theme) => React.CSSProperties
  tab: React.Key
}
type SegmentItemProps = Partial<{
  noIndicator: boolean
  tab: Readonly<React.Key>
  tabKey: React.Key
  children: React.ReactNode
  className: string
  onClick: (key: React.Key) => void
  cssOptions: (theme: Theme, isCurrentTab: boolean) => React.CSSProperties
}>

const useSegmentStyles = createUseStyles<'segment', Pick<SegmentProps, 'cssOptions'>, Theme>((theme) => ({
  segment: ({ cssOptions }) => ({
    display: 'flex',
    ...cssOptions,
  }),
}))

const useSegmentItemStyles = createUseStyles<'tabItem', Pick<SegmentItemProps, 'cssOptions'>, Theme>((theme) => ({
  tabItem: ({ cssOptions }) => ({
    position: 'relative',
    flex: 1,
    textAlign: 'center',
    ...cssOptions,
  }),
}))

const Segment = ({
  onClickTab,
  noIndicator = false,
  tab,
  cssOptions,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & SegmentProps) => {
  const classes = useSegmentStyles({ cssOptions })
  const computedClassNames = classnames(classes.segment, className)
  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>
      if (child.type.name == 'SegmentItem') {
        return React.cloneElement(element, {
          onClick: () => {
            onClickTab?.(element.key || `${child.type.name}${i}`)
          },
          tab: tab,
          tabKey: element.key,
          noIndicator: noIndicator,
          ...{ ...element.props, key: element.key },
        })
      }
      return undefined
    })
  }

  return (
    <div aria-label="segment button" className={computedClassNames} {...props}>
      {children instanceof Array && handleChildrenRender()}
    </div>
  )
}

const SegmentItem = ({ tab, tabKey, onClick, noIndicator, cssOptions, children, className }: SegmentItemProps) => {
  const classes = useSegmentItemStyles({ cssOptions })
  const computedClassNames = classnames(classes.tabItem, className)
  const handleClickTab = () => {
    onClick?.(tabKey as React.Key)
  }
  const tabCssOptions = (theme: Theme) => ({
    borderRadius: '',
    ...cssOptions?.(theme, tab == tabKey),
  })
  return (
    <Button aria-label="tab item" className={computedClassNames} onClick={handleClickTab} cssOptions={tabCssOptions}>
      {children}
    </Button>
  )
}

Segment.Item = SegmentItem

export default Segment
