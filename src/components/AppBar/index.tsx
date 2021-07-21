import { useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import palette from '../../constants/palette'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'
import Col from '../Col'
import Row from '../Row'
import Container from '../Container'

type AppBarItem = {
  node: React.ReactNode
  key: React.Key
  flex: number
  onClick?: () => void
}
type AppBarProps = {
  items?: AppBarItem[]
  fixed?: boolean
  backgroundColor?: string
  cssOptions?: React.CSSProperties
}

type RuleNames = 'AppBar'

const useStyles = createUseStyles<RuleNames, AppBarProps, Theme>((theme) => ({
  AppBar: ({ backgroundColor, cssOptions, fixed }) => ({
    height: '3em',
    backgroundColor: backgroundColor || theme?.colorPrimary || '#333',
    ...cssOptions,
    ...(fixed
      ? {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
        }
      : {}),
  }),
}))
const AppBar = ({
  items,
  fixed,
  backgroundColor,
  cssOptions,
  className,
  ...props
}: AppBarProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({ fixed, backgroundColor, cssOptions })

  const computedClassNames = classnames(classes.AppBar, className)

  return (
    <Container className={computedClassNames} {...props}>
      <Row fullHeight>
        {items?.map((item) => (
          <Col onClick={item.onClick} flex={item.flex} key={item.key}>
            {item.node}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AppBar
