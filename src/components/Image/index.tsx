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
  cssOptions?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}
const useStyles = createUseStyles<
  'image',
  Pick<ImageProps, 'cssOptions' | 'height' | 'width' | 'fit' | 'circle'>,
  Theme
>(theme => ({
  image: ({ cssOptions, width, height, fit, circle }) => ({
    verticalAlign: 'middle',
    background: 'transparent',
    borderRadius: ((circle as boolean) && '50%') || '',
    objectFit: fit || '',
    width: width || '',
    height: height || '100%',
    ...cssOptions?.(theme),
  }),
}))
const Image = ({
  circle = false,
  src,
  alt,
  fit,
  width = '100%',
  height = 'auto',
  cssOptions,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & ImageProps) => {
  const classes = useStyles({ circle, cssOptions, width, height })

  const computedClassNames = classnames(classes.image, className)
  return <img src={src} alt={alt} {...props} className={computedClassNames} />
}

export default Image
