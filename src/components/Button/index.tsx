import classnames from 'classnames'
import Text from '../Text'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
interface ButtonProps {
  padding?: string
  block?: boolean
  disabled?: boolean
  text?: boolean
  outlined?: boolean
  icon?: boolean
  tile?: boolean
  color?: string
  cssOptions?: (theme: Theme) => React.CSSProperties
}

const useStyles = createUseStyles<'button', ButtonProps, Theme>(
  theme => ({
    button: ({ block, color, tile, cssOptions, icon, disabled, text, outlined }) => ({
      padding: icon ? '' : '0.6em 1.2em',
      width: block ? '100%' : 'auto',
      border: outlined ? '1px solid ' + (color || theme?.color?.primary || '#231F9C') : 'none',
      borderRadius: tile ? '0px' : '4px',
      background:
        disabled == false
          ? text || outlined || icon
            ? 'transparent'
            : theme
            ? theme.color.primary
            : '#231F9C'
          : theme
          ? theme.color.greyLight
          : '#F3F4F5',
      ...cssOptions?.(theme),
    }),
  }),
  { name: 'Button', classNamePrefix: 'Button' },
)

const Button = ({
  block = false,
  disabled = false,
  text = false,
  outlined = false,
  cssOptions,
  icon = false,
  tile = false,
  color,
  padding,
  className,
  children,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) => {
  const classes = useStyles({
    block,
    tile,
    icon,
    disabled,
    text,
    cssOptions,
    outlined,
    padding,
  })

  const computedClassNames = classnames(classes.button, className)
  return (
    <button className={computedClassNames} disabled={disabled} {...props}>
      {typeof children == 'string' ? <Text color={color}>{children}</Text> : children}
    </button>
  )
}

export default Button
