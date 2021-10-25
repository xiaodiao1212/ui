import * as React from 'react'
import classnames from 'classnames'
import { theme, Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'
import Button from '../Button'

interface TabsProps {
  noIndicator?: boolean
  onClickTab: (key: React.Key) => void
  css?: (theme: Theme) => React.CSSProperties
  tab: React.Key
}
type TabItemProps = Partial<{
  noIndicator: boolean
  tab: Readonly<React.Key>
  tabKey: React.Key
  children: React.ReactNode
  className: string
  onClick: (key: React.Key) => void
  css: (theme: Theme, isCurrentTab: boolean) => React.CSSProperties
}>
type TabsIndicatorProps = Partial<{
  children: React.ReactNode
  css?: (theme: Theme) => React.CSSProperties
}>

const useTabsStyles = createUseStyles<'tabs', Pick<TabsProps, 'css'>, Theme>(theme => ({
  tabs: ({ css }) => ({
    display: 'flex',
    ...css,
  }),
}))
const useTabItemStyles = createUseStyles<'tabItem', Pick<TabItemProps, 'css'>, Theme>(theme => ({
  tabItem: ({ css }) => ({
    position: 'relative',
    flex: 1,
    textAlign: 'center',
    ...css,
  }),
}))
const useTabsIndicatorStyles = createUseStyles<'tabsIndicator', Pick<TabsIndicatorProps, 'css'>, Theme>(theme => ({
  tabsIndicator: ({ css }) => ({
    position: 'absolute',
    height: '1px',
    background: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    ...css,
  }),
}))
const Tabs = ({
  onClickTab,
  noIndicator = false,
  tab,
  css,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'nav'> & TabsProps) => {
  const classes = useTabsStyles({ css })
  const computedClassNames = classnames(classes.tabs, className)
  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>
      if (child.type.name == 'TabItem') {
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
  const renderTab = (tab: React.ReactNode) => tab
  return (
    <nav aria-label='tabs' className={computedClassNames} {...props}>
      {typeof children === 'function' && children(renderTab)}
      {children instanceof Array && handleChildrenRender()}
    </nav>
  )
}

const TabItem = ({ tab, tabKey, onClick, noIndicator, css, children, className }: TabItemProps) => {
  const classes = useTabItemStyles({ css })
  const computedClassNames = classnames(classes.tabItem, className)
  const handleClickTab = () => {
    onClick?.(tabKey as React.Key)
  }
  const tabcss = (theme: Theme) => ({
    borderRadius: '',
    ...css?.(theme, tab == tabKey),
  })
  return (
    <Button aria-label='tab item' className={computedClassNames} onClick={handleClickTab} css={tabcss}>
      {children}
      {tab == tabKey && !noIndicator && <TabsIndicator />}
    </Button>
  )
}
const TabsIndicator = ({ css, className, ...props }: React.ComponentPropsWithoutRef<'span'> & TabsIndicatorProps) => {
  const classes = useTabsIndicatorStyles({ css })
  const computedClassNames = classnames(classes.tabsIndicator, className)
  return <span aria-label='tabs indicator' className={computedClassNames} {...props} />
}

Tabs.Item = TabItem
Tabs.Indicator = TabsIndicator
export default Tabs
