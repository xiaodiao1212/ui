import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

interface TimelineProps {
  cssOptions?: (theme: Theme) => React.CSSProperties
  color?: string
  dot?: 'small' | 'medium' | 'large'
}
interface TimelineItemProps {
  icon?: React.ReactNode
  line?: Boolean
  interval?: string
  subtitle?: string
  title?: string
  cssOptions?: (theme: Theme) => React.CSSProperties
}

const useTimelineStyles = createUseStyles<'timeline', TimelineProps, Theme>(theme => ({
  timeline: ({ color, dot, cssOptions }) => {
    let iconStyle = {}
    let textStyle = {}
    switch (dot) {
      case 'small':
        iconStyle = {
          left: '1.85em',
          width: '0.91em',
          height: '0.91em',
        },
        textStyle = { fontSize: '9pt' }
        break
      case 'medium':
        iconStyle = {
          left: '1.7em',
          width: '1.2em',
          height: '1.2em',
        }
        textStyle = { fontSize: '11pt' }
        break
      case 'large':
        iconStyle = {
          left: '1.57em',
          width: '1.5em',
          height: '1.5em',
        }
        textStyle = { fontSize: '14pt' }
        break
      default:
        break
    }
    return {
      fontSize: '1em',
      fontWeight: 300,
      lineHeight: 1.5,
      letterSpacing: '0.05em',
      ...cssOptions?.(theme),
      '&': {
        boxSizing: 'borderBox',
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
      },
      '& .timeline': {
        position: 'relative',
        maxWidth: '95%',
        listStyle: 'none',
        '& .line': {
          backgroundColor: color,
          bottom: 0,
          boxSizing: 'content-box',
          marginLeft: '-1px',
          position: 'absolute',
          top: '-6em',
          left: '1.8em',
          width: '2px',
          height: '80%',
          zIndex: -10,
        },
        '& > .icon': {
          position: 'absolute',
          display: 'block',
          outline: '8px solid white',
          top: 0,
          ...iconStyle,
          margin: '0.5em 0.5em 0.5em -0.5em',
          color: '#fff',
          borderRadius: '100%',
          backgroundColor: color,
          zIndex: 1,
          '& > .text': {
            display: 'block',
            ...textStyle,
            textAlign: 'center',
            position: 'relative',
          },
        },
      },
    }
  },
}))
const useTimelineItemStyles = createUseStyles<'timeline-item', TimelineItemProps, Theme>(theme => ({
  'timeline-item': ({ interval, icon, cssOptions }) => ({
    ...cssOptions?.(theme),
    '& > .event': {
      position: 'relative',
    },
    '& > .body': {
      padding: interval ? '2em 2em 0 2em' : '0.8em 0 1em 2em',
      marginBottom: interval ? '0' : '-3em',
      position: 'relative',
      top: interval ? '-1.875em' : '-4em',
      left: '2em',
      width: '95%',
      '& > h3': {
        fontSize: '1.75em',
      },
      '& > h4': {
        fontSize: '1.2em',
        marginBottom: '1.2em',
      },
      '& > .date': {
        color: 'white',
        backgroundColor: interval ? 'black' : '',
        boxShadow: 'inset 0 0 0 0em #ef795a',
        display: 'inline-block',
        marginBottom: '1.2em',
        padding: '0.25em 1em 0.2em 1em',
      },
      '& > .description': {
        fontSize: '.8em',
        '& > strong': {
          fontWeight: '700',
        },
        '& > p': {
          paddingBottom: '1.2em',
        },
      },
    },
  }),
}))
const TimelineItem = ({
  cssOptions,
  children,
  className,
  icon,
  interval,
  subtitle,
  title,
  ...props
}: TimelineItemProps & React.ComponentPropsWithoutRef<'li'>) => {
  const classes = useTimelineItemStyles({
    icon,
    interval,
    subtitle,
    title,
    cssOptions,
  })

  const computedClassNames = classnames(classes['timeline-item'], className)
  return (
    <Timeline>
      <label className={`icon`}>
        <span className={`text`}>{icon}</span>
      </label>
      <li className={computedClassNames} {...props}>
        <div className={`body`}>
          <p className={`date`}>{interval}</p>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <div className={`description`}>{children}</div>
        </div>
      </li>
      <div className={`line`} />
    </Timeline>
  )
}
const Timeline = ({
  cssOptions,
  children,
  className,
  color = '#000',
  dot = 'medium',
  ...props
}: TimelineProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useTimelineStyles({
    cssOptions,
    color,
    dot,
  })
  const computedClassNames = classnames(classes.timeline, className)
  return (
    <div className={computedClassNames} {...props}>
      <ul className={`timeline`}>{children}</ul>
    </div>
  )
}
Timeline.item = TimelineItem
export default Timeline
