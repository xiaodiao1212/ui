import classnames from 'classnames'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'

type CollapseProps = {
  header: React.ReactNode
  extra?: React.ReactNode
  expand: boolean
  onClickExpand?: () => void
}

type RuleNames = 'collapse' | 'arrow'

const useStyles = createUseStyles<RuleNames, Pick<CollapseProps, 'expand'>, Theme>(theme => ({
  collapse: {
    padding: '1em 0',
    '& > .flex': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  arrow: ({ expand }) => ({
    marginLeft: 'auto',
    width: '0.6em',
    height: '0.6em',
    borderTop: `1px solid ${theme.color.black || '#111827'}`,
    borderRight: `1px solid ${theme.color.black || '#111827'}`,
    // transformOrigin: '50%',
    transform: `rotate(${expand ? '-45deg' : '135deg'})`,
    transition: 'transform 0.1s ease-in',
  }),
}))
const Collapse = ({
  title,
  extra,
  expand = false,
  children,
  className,
  onClickExpand,
  ...props
}: CollapseProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    expand,
  })
  const handleClickExpand = () => {
    onClickExpand?.()
  }
  const computedClassNames = classnames(classes.collapse, className)

  const cnsArrow = classnames(classes.arrow)
  return (
    <div className={computedClassNames}>
      <div className='flex'>
        <div className='title'>{title}</div>
        {extra || <div className={cnsArrow} onClick={handleClickExpand} />}
      </div>
      {expand && children}
    </div>
  )
}

export default Collapse
