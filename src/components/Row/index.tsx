import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type RowAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch'
type RowJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between'
type RuleNames = 'row'
interface RowProps {
  vertical?: boolean
  alignItems?: RowAlign
  justifyContent?: RowJustify
  gap?: string
  wrap?: boolean
  cssOptions?: (theme: Theme) => React.CSSProperties
}

const useStyles = createUseStyles<RuleNames, RowProps, Theme>(theme => ({
  row: ({ vertical, wrap, cssOptions, alignItems, gap }) => ({
    display: 'flex',

    flexDirection: vertical ? 'column' : 'row',
    gridGap: gap,

    ...(vertical ? {} : { alignItems, flexWrap: wrap ? 'wrap' : 'nowrap' }),
    ...cssOptions?.(theme),
  }),
}))

const Row = ({
  vertical = false,
  alignItems = 'center',
  wrap = false,
  justifyContent,
  gap,
  cssOptions,
  children,
  className,
  ...props
}: RowProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    alignItems,
    justifyContent,
    gap,
    wrap,
    vertical,
    cssOptions,
  })
  const computedClassNames = classnames(classes.row, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}
export default Row
