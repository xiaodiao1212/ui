import * as React from 'react'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'
// 也可也直接用宽高的背景色来实现divider组件
type DividerProps = {
  width?: number
  vertical?: boolean
  color?: string
  dashed?: boolean
  cssOptions?: (theme: Theme) => React.CSSProperties
}

type RuleNames = 'divider'

const useStyles = createUseStyles<RuleNames, DividerProps, Theme>((theme) => ({
  divider: ({ color, width, vertical, cssOptions, dashed }) => ({
    ...(vertical
      ? {
          display: 'inline',
          borderLeft: '1px ' + (dashed ? 'dashed' : 'solid'),
          width: 0,
          maxWidth: 0,
          borderLeftColor:
            color || theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6',
          borderLeftWidth: `${width}px`,
        }
      : {
          borderTop: '1px ' + (dashed ? 'dashed' : 'solid'),
          height: 0,
          maxHeight: 0,
          borderTopColor:
            color || theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.grey) : '#F3F4F6',
          borderTopWidth: `${width}px`,
        }),
    ...cssOptions?.(theme),
  }),
}))

const Divider = ({
  width = 1,
  vertical = false,
  dashed = false,
  color,
  cssOptions,
  className,
  children,
  ...props
}: DividerProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    vertical,
    dashed,
    color,
    width,
    cssOptions,
  })

  const computedClassNames = classnames(classes.divider, className)
  return <div className={computedClassNames} {...props} />
}

export default Divider
