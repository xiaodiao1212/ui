
/** @jsxImportSource @emotion/react */

import React from 'react'
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'

export type TimelineItemProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  interval?: string
  subtitle?: string
  title?: string
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

export const TimelineItem = ({
  icon,
  children,
  co,
  className,
  ...props
}: TimelineItemProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme
  const color = theme ? theme.color.primary : '#5568FE'
  const styles = css({
    // position: 'absolute',
    // display: 'block',
    // outline: '10px solid white',
    // top: 0,
    // left: '1.71em',
    // width: '0.9em',
    // height: '0.9em',
    // margin: '0.5em 0.5em 0.5em -0.5em',
    // color: '#fff',
    // borderRadius: '100%',
    // backgroundColor: 'gray',
    // zIndex: 1,
    display: 'block',
    height: '100%',
    width: '100%',
    '& .icon': {
      position: 'absolute',
      zIndex: 1,
    },
    '& .indicator': {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        zIndex: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'gray',
      },
    },
    '& .indicators': {
     // width: '100%',
      height: '5em',
      '&::after': {
        left: '4px',
        top: '27%',
        height: '98%',
       // transform: 'translateX(-60%)',
        width: '1px',
        opacity: '100%'
      },
    },
    '&:last-child': {
      '.indicators::after': {
        display: 'none',
      },
    },
    '& .icon-container': {
      position: 'absolute',
      zIndex: 1,
    },
    '& .body': {
      padding: '0.8em 0 1em 2em',
      marginBottom: '1.2em',
      marginTop: '-6.4em',
      width: '100%',
    },
    '& .desc': {
      fontSize: '.8em',
    },
    ...(typeof co == 'function' ? co(theme) : co),
  })
  const computedClassNames = clsx(className)
  return (
    <div css={styles} className={computedClassNames} {...props}>
      <div className={`indicators indicator`}>
        <span className={`icon`}>{icon}</span>
      </div>
      <li>
        <div className={`body`}>
          <div className={`desc`}>{children}</div>
        </div>
      </li>
    </div>
  )
}
