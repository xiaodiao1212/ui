import classnames from 'classnames'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'

type CardProps = {
  cssOptions?: React.CSSProperties
}

type RuleNames = 'card'

const useStyles = createUseStyles<RuleNames, CardProps, Theme>((theme) => ({
  card: ({ cssOptions }) => ({
    background: theme ? (theme.mode == 'light' ? theme.color.white : theme.color.black) : '#fff',
    ...cssOptions,
  }),
}))
const Card = ({ cssOptions, className, children, ...props }: CardProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({ cssOptions })
  const computedClassNames = classnames(classes.card, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}
export default Card
