import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

interface RowProps {
  vertical?: boolean
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  justifyContent?: 'start' | 'center' | 'end' | 'space-around' | 'space-between'
  gap?: string
  wrap?: boolean
  fullHeight?: boolean
  css?: (theme: Theme) => React.CSSProperties
}

const useStyles = createUseStyles<'row', RowProps, Theme>(theme => ({
  row: ({ vertical, wrap, css, fullHeight, alignItems, gap }) => ({
    display: 'flex',
    width: '100%',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gridGap: gap,
    alignItems,
    ...(vertical ? {} : { flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...css?.(theme),
  }),
}))

const Row = ({
  vertical = false,
  alignItems = 'center',
  wrap = false,
  justifyContent,
  fullHeight,
  gap,
  css,
  children,
  className,
  ...props
}: RowProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    fullHeight,
    alignItems,
    justifyContent,
    gap,
    wrap,
    vertical,
    css,
  })
  const computedClassNames = classnames(classes.row, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}
export default Row
