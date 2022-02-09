/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme'
import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { css, useTheme } from '@emotion/react'
import { TimelineItemProps, TimelineItem } from './item'

interface TimelineProps {
  children: React.ReactNode
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

const Timeline = ({ children, co, className, ...props }: TimelineProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme
  const styles = css({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    '& .circle': {
      width: '0.9em',
      height: '0.9em',
      // borderStyle: 'solid',
      // borderWidth: 1,
      borderRadius: '50%',
      // borderColor: 'gray',
      background: 'gray',
      position: 'absolute',
      outline: '10px solid white',
      left: -2.5,
      top: -4,
    },
    '& .text-pos': {
      position: 'absolute',
      top: '-3px',
    },
    ...(typeof co == 'function' ? co(theme) : co),
  })
  const nat = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }
    console.log('index:', child)
    const props = child.props as TimelineItemProps
    const icon = props.icon ?? (
      <label className={`la`}>
        <span className={`circle`} />
        {/* <span className={`text-pos`}>{index + 1}</span> */}
      </label>
    )
    return React.cloneElement(child, {
      icon,
    })
  })
  const computedClassNames = clsx(className)
  return (
    // <Container>
    //   <ul className='timeline'>{children}</ul>
    // </Container>
    <div css={styles} className={computedClassNames} {...props}>
      <ul className='timeline'>{nat}</ul>
    </div>
  )
}
Timeline.item = TimelineItem
export default Timeline
