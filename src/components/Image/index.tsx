import * as React from 'react'
import classnames from 'classnames'
import * as CSS from 'csstype'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type RuleNames = 'image' | 'circle'

type ImageProps = {
  center?: boolean
  circle?: boolean
  filter?: CSS.Properties<'filter'>
  fit?: CSS.Properties<'object-fit'>
  width?: string
  height?: string
  cssOptions?: React.CSSProperties
}
const useStyles = createUseStyles<RuleNames, ImageProps, Theme>((theme) => ({
  image: ({ fit, cssOptions, center, ...props }) => ({
    margin: center ? 'auto' : '',
    display: 'grid',
    objectFit: fit,
    ...props,
    ...cssOptions,
  }),
  circle: {
    borderRadius: '50%',
  },
}))
const Image = ({
  circle = false,
  loading = 'lazy',
  src,
  alt,
  center,
  filter,
  fit,
  width = '100%',
  height = 'auto',
  cssOptions,
  className,
  ...props
}: ImageProps & React.ComponentPropsWithoutRef<'img'>) => {
  const classes = useStyles({ center, cssOptions, filter, fit, width, height })
  const computedClassNames = classnames(classes.image, { [classes.circle]: circle }, className)
  return <img className={computedClassNames} src={src} alt={alt} loading={loading} {...props} />
}

export default Image
