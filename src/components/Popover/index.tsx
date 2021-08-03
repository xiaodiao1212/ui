import * as React from 'react'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'

interface PopoverProps {
  cssOptions?: (theme: Theme) => React.CSSProperties
}
interface PopoverContentProps {
  position: 'top' | 'left' | 'right' | 'bottom'
  show: boolean
  cssOptions?: (theme: Theme) => React.CSSProperties
}
const usePopoverStyles = createUseStyles<'popover', PopoverProps, Theme>((theme) => ({
  popover: ({ cssOptions }) => ({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...cssOptions?.(theme),
  }),
}))
const usePopoverContentStyles = createUseStyles<'popover-content', PopoverContentProps, Theme>((theme) => ({
  'popover-content': ({ show, position, cssOptions }) => {
    let computedPosition = {}
    switch (position) {
      case 'top':
        computedPosition = {
          top: 0,
        }
        break
      case 'left':
        computedPosition = {
          left: 0,
        }
        break
      case 'bottom':
        computedPosition = {
          bottom: 0,
        }
        break
      case 'right':
        computedPosition = {
          right: 0,
        }
        break
      default:
        break
    }
    return {
      position: 'absolute',
      ...computedPosition,
      display: show ? 'block' : 'none',
      ...cssOptions?.(theme),
    }
  },
}))
const Popover = ({
  cssOptions,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PopoverProps) => {
  const [isContentShow, setIsContentShow] = React.useState(false)
  const classes = usePopoverStyles({ cssOptions })
  const computedClassNames = classnames(classes.popover, className)
  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>
      if (child.type.name == 'PopoverContent') {
        React.cloneElement(element, {
          show: isContentShow,
        })
      }
      return React.cloneElement(element, {
        onFocus: () => {
          setIsContentShow(true)
        },
        onBlur: () => {
          setIsContentShow(false)
        },
      })
    })
  }
  return (
    <div aria-label="popover" className={computedClassNames} {...props}>
      {handleChildrenRender()}
    </div>
  )
}
const PopoverContent = ({
  show = false,
  position = 'bottom',
  cssOptions,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PopoverContentProps) => {
  const classes = usePopoverContentStyles({ show, position, cssOptions })
  const computedClassNames = classnames(classes['popover-content'], className)
  return (
    <div aria-label="popover-content" className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

Popover.Content = PopoverContent

export default Popover
