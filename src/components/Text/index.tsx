import { createUseStyles } from 'react-jss'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'
type TextProps = Partial<{
  blod: boolean
  color: string | string
  fontSize: string
  maxLength: number
  dark: boolean
  cssOptions: React.CSSProperties
}>

type RuleNames = 'text'

const useStyles = createUseStyles<RuleNames, TextProps, Theme>((theme) => ({
  text: ({ color, dark, blod, maxLength, cssOptions, ...props }) => ({
    ...props,
    fontWeight: blod ? '700' : '500',
    display: 'inline-block',
    textOverflow: maxLength ? 'ellipsis' : '',
    whiteSpace: maxLength ? 'nowrap' : '',
    width: maxLength || '',
    overflow: maxLength ? 'hidden' : '',
    color:
      color ||
      (dark
        ? theme?.color?.white || '#fff'
        : theme
        ? theme.mode == 'light'
          ? theme.color.black
          : theme.color.white
        : '#111827'),
    ...cssOptions,
  }),
}))

const Text = ({
  dark = false,
  maxLength,
  fontSize,
  blod,
  color,
  children,
  cssOptions,
  className,
  ...props
}: TextProps & React.ComponentProps<'div'>) => {
  const classes = useStyles({
    color,
    blod,
    fontSize,
    maxLength,
    dark,
    cssOptions,
  })
  const computedClassNames = classnames(classes.text, className)
  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default Text
