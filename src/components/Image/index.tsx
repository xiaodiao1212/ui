import * as React from 'react'
import classnames from 'classnames'
import * as CSS from 'csstype'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type ImageProps = {
  circle?: boolean
  fit?: CSS.Property.ObjectFit
  width?: string
  height?: string
  css?: (theme: Theme) => React.CSSProperties
}
const useStyles = createUseStyles<'image', Pick<ImageProps, 'css' | 'height' | 'width' | 'fit' | 'circle'>, Theme>(
  theme => ({
    image: ({ css, width, height, fit, circle }) => ({
      verticalAlign: 'middle',
      background: 'transparent',
      borderRadius: ((circle as boolean) && '50%') || '',
      objectFit: fit || '',
      width: width || '',
      height: height || '100%',
      ...css?.(theme),
    }),
  }),
)
const Image = ({
  circle = false,
  src,
  alt,
  fit,
  width = '100%',
  height = 'auto',
  css,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & ImageProps) => {
  const classes = useStyles({ circle, css, width, height })

  const computedClassNames = classnames(classes.image, className)
  return <img src={src} alt={alt} width={width} {...props} className={computedClassNames} />
}

export default Image
