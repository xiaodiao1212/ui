import * as React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'
type CarouselProps = Partial<{
  data: React.ReactNode[]
  onChange?: (index: number) => any
  auto?: boolean
  vertical?: boolean
  css?: (theme: Theme) => React.CSSProperties
}>

type RuleNames = 'carousel'

const useStyles = createUseStyles<RuleNames, CarouselProps, Theme>(theme => ({
  carousel: ({ css, vertical }) => ({
    overflowX: 'scroll',
    display: 'flex',
    scrollSnapType: `${vertical ? 'y' : 'x'} mandatory`,
    webkitOverflowScrolling: 'touch',
    ...css?.(theme),
    '& > *': {
      minWidth: '100%',
      scrollSnapAlign: 'start',
    },
  }),
}))

const Carousel = ({
  auto,
  data,
  vertical = false,
  onChange,
  children,
  css,
  className,
  ...props
}: CarouselProps & React.ComponentPropsWithoutRef<'div'>) => {
  const handleCarouselChange = (index: number) => {
    onChange?.(index)
  }
  const classes = useStyles({
    css,
    vertical,
  })
  const computedClassNames = classnames(classes.carousel, className)

  return (
    <div className={computedClassNames} {...props}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child as React.FunctionComponentElement<any>, {
          onTouchStart: () => handleCarouselChange(i),
        }),
      )}
    </div>
  )
}

export default Carousel
