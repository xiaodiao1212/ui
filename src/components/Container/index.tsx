import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type ContainerProps = {
  noPadding?: boolean
  padding?: string
  noYPadding?: boolean
  noXPadding?: boolean
  absolute?: boolean
  relative?: boolean
  fullHeight?: boolean
  sticky?: boolean
  scroll?: boolean
  fullScreen?: boolean
  cssOptions?: React.CSSProperties
}

type RuleNames = 'container'

const useStyles = createUseStyles<RuleNames, ContainerProps, Theme>((theme) => ({
  container: ({
    scroll,
    noPadding,
    fullScreen,
    padding,
    relative,
    noYPadding,
    absolute,
    noXPadding,
    fullHeight,
    cssOptions,
    sticky,
  }) => {
    let paddingComputed
    if (noPadding) paddingComputed = ''
    else if (noYPadding) paddingComputed = '0 ' + padding
    else if (noXPadding) paddingComputed = padding + ' 0'
    else paddingComputed = padding
    return {
      height: fullScreen ? '100vh' : fullHeight ? '100%' : 'auto',
      overflow: scroll ? 'auto' : '',
      padding: paddingComputed,
      ...(sticky && {
        position: 'sticky',
        top: 0,
      }),
      ...(relative && { position: 'relative' }),
      ...(absolute && { position: 'absolute' }),
      ...cssOptions,
    }
  },
}))
const Container = ({
  noPadding = false,
  noYPadding = false,
  noXPadding = false,
  padding = '1em',
  absolute = false,
  fullHeight = false,
  relative = false,
  fullScreen = false,
  sticky = false,
  scroll,
  cssOptions,
  className,
  children,
  ...props
}: ContainerProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    scroll,
    noPadding,
    padding,
    noYPadding,
    absolute,
    noXPadding,
    fullHeight,
    sticky,
    relative,
    fullScreen,
    cssOptions,
  })
  const computedClassNames = classnames(
    classes.container,
    className && {
      [`${className}`]: true,
    },
  )
  console.log(computedClassNames)

  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default Container
