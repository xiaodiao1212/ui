import { createUseStyles } from 'react-jss'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'

type TextProps = Partial<{
  thin: boolean
  blod: boolean
  color: string
  size: string
  maxLength: number
  dark: boolean
  css?: (theme: Theme) => React.CSSProperties
}>

type RuleNames = 'text'

const useStyles = createUseStyles<RuleNames, TextProps, Theme>(theme => ({
  text: ({ color, dark, blod, maxLength, size, thin, css }) => {
    const computedColor =
      color ||
      ((dark
        ? theme
          ? theme.color.white
          : '#fff'
        : theme
        ? theme.mode == 'light'
          ? theme.color.black
          : theme.color.white
        : '#111827') as string)
    return {
      fontSize: size as string,
      fontWeight: blod ? 700 : thin ? 200 : 500,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textOverflow: maxLength ? 'ellipsis' : '',
      whiteSpace: maxLength ? 'nowrap' : '',
      overflow: maxLength ? 'hidden' : '',
      color: computedColor,
      ...css?.(theme),
    }
  },
}))

const Text = ({
  thin = false,
  dark = false,
  maxLength,
  size = '1em',
  blod,
  color,
  children,
  css,
  className,
  ...props
}: TextProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    thin,
    color,
    blod,
    size,
    maxLength,
    dark,
    css,
  })
  const computedClassNames = classnames(classes.text, className)
  return (
    <div className={computedClassNames} {...props}>
      {maxLength ? (children as string).substring(0, maxLength) + '...' : children}
    </div>
  )
}

export default Text
