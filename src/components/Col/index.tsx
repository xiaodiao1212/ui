import * as React from 'react'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'

type ColProps = {
  flexSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal'
  textAlign?: 'center' | 'left' | 'right'
  flex?: number | string
  noFlex?: boolean
  autoMargin?: boolean
  css?: (theme: Theme) => React.CSSProperties
}

type RuleNames = 'col'

const useStyles = createUseStyles<RuleNames, ColProps, Theme>(theme => ({
  col: ({ flex, autoMargin, noFlex, css, ...props }) => ({
    ...props,
    ...(autoMargin ? { marginLeft: 'auto' } : { flex: noFlex ? '' : flex }),
    ...css?.(theme),
  }),
}))

const Col = ({
  flexSelf,
  textAlign = 'center',
  flex = '1',
  noFlex = false,
  autoMargin = false,
  css,
  className,
  children,
  ...props
}: ColProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    flexSelf,
    flex,
    noFlex,
    autoMargin,
    textAlign,
    css,
  })
  const computedClassNames = classnames(classes.col, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default Col
