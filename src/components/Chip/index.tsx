import { useState } from 'react'
import * as React from 'react'
import classnames from 'classnames'
import palette from '../../constants/palette'
import { Theme } from '../../constants/theme'
import { createUseStyles } from 'react-jss'
import Col from '../Col'
import Row from '../Row'
type ChipProps = {
  outline?: boolean
  color?: string
  backgroundColor?: string
  borderRadius?: string
}

type RuleNames = 'chip'

const useStyles = createUseStyles<RuleNames, ChipProps, Theme>((theme) => ({
  chip: ({ outline, color, backgroundColor, borderRadius }) => ({
    display: 'inline-block',
    padding: '0.1em 0.5em 0.2em 0.5em',
    color: color || theme?.colorTextInDark || palette.grey[900],
    borderRadius: borderRadius || '16px',
    ...(!outline
      ? {
          backgroundColor: backgroundColor || theme?.colorPrimary || 'white',
          color: color || theme?.colorTextInLight,
        }
      : {
          border: '1px solid ' + color || theme?.colorTextInLight || palette.grey[900],
        }),
  }),
}))
const Chip = ({
  outline = false,
  color,
  backgroundColor,
  borderRadius,
  children,
  className,
  ...props
}: ChipProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({ outline, color, backgroundColor, borderRadius })

  const computedClassNames = classnames(classes.chip, className)

  return (
    <div className={computedClassNames} {...props}>
      {children}
    </div>
  )
}

export default Chip
