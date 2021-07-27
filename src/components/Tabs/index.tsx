import { useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import palette from '../../constants/palette'
import { theme, Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'
import Button from '../Button'
import Col from '../Col'
import Text from '../Text'
import Row from '../Row'
type TabKey = string | number | symbol
type Tab = {
  key: string
  title: string
}
type TabsProps = {
  color?: string
  items?: Tab[]
  className?: string
  onClickTab?: (key: string) => void
  cssOptions?: React.CSSProperties
  tab: string
}

type RuleNames = 'tabs'

const useStyles = createUseStyles<RuleNames, Omit<TabsProps, 'tab'>, Theme>((theme) => ({
  tabs: ({ cssOptions }) => ({
    ...cssOptions,
  }),
}))
const Tabs = ({ items, onClickTab, color, tab, cssOptions, className }: TabsProps) => {
  const classes = useStyles({ cssOptions })
  const computedClassNames = classnames(classes.tabs, className)
  return (
    <Row className={computedClassNames}>
      {items?.map((v, i) => (
        <Col
          key={i}
          cssOptions={{
            backgroundColor: color || theme.color.greyLight,
          }}
        >
          <Text
            dark
            onClick={() => {
              onClickTab?.(v.key)
            }}
            cssOptions={{
              margin: '0em 2.2em',
              padding: '0.3em 0',
              ...(tab == v.key
                ? {
                    borderBottom: '3px solid ' + theme.color.white,
                  }
                : { borderBottom: '3px solid ' + (color || theme.color.greyLight) }),
            }}
          >
            {v.title}
          </Text>
        </Col>
      ))}
    </Row>
  )
}

export default Tabs
