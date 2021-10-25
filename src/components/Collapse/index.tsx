import classnames from 'classnames'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'

export type CollapseProps = {
  title?: string
  expand?: boolean
  onClickExpand?: () => void
}

type RuleNames = 'collapse' | 'icon' | 'arrow'

const useStyles = createUseStyles<RuleNames, CollapseProps, Theme>(theme => ({
  collapse: {
    padding: '1em 0',
    '& > .flex': {
      marginBottom: '.4em',
      display: 'flex',
      '& > .title': {
        fontWeight: 700,
        flex: 7,
      },
    },
  },
  icon: ({ expand }) => ({
    marginTop: expand ? '.5em' : '',
    flex: 1,
  }),
  arrow: ({ expand }) => ({
    marginLeft: 'auto',
    width: '0.6em',
    height: '0.6em',
    borderTop: `1px solid ${theme.color.black || '#111827'}`,
    borderRight: `1px solid ${theme.color.black || '#111827'}`,
    transform: `rotate(${expand ? '-45deg' : '135deg'})`,
  }),
}))
const Collapse = ({
  title,
  expand = false,
  children,
  className,
  ...props
}: CollapseProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    expand,
  })
  const handleClickExpand = () => {
    props?.onClickExpand?.()
  }
  const computedClassNames = classnames(classes.collapse, className)
  const cnsIcon = classnames(classes.icon, className)
  const cnsArrow = classnames(classes.arrow)
  return (
    <div className={computedClassNames}>
      <div className='flex'>
        <div className='title'>{title}</div>
        <div className={cnsIcon}>
          <div className={cnsArrow} onClick={handleClickExpand} />
        </div>
      </div>
      {expand && children}
    </div>
  )
}

export default Collapse
