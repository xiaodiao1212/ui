import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
import Timeline from '../Timeline'

type RuleNames = 'timelineItem'
interface TimelineItemProps {
  order?: Number
  line?: Boolean
  interval?: string
  subtitle?: string
  title?: string
  type?: string
  css?: (theme: Theme) => React.CSSProperties
}
const useStyles = createUseStyles<RuleNames, TimelineItemProps, Theme>(theme => ({
  timelineItem: ({ interval, type, css }) => ({
    ...css?.(theme),
    '& > .event': {
      position: 'relative',
    },
    '& > .icon': {
      position: 'absolute',
      display: 'block',
      // outline: '10px solid white',
      top: 0,
      left: '1.7em',
      width: '1.2em',
      height: '1.2em',
      margin: '0.5em 0.5em 0.5em -0.5em',
      color: '#fff',
      borderRadius: '100%',
      backgroundColor: type,
      zIndex: 1,
      '& > .text': {
        display: 'block',
        fontSize: '11pt',
        textAlign: 'center',
        position: 'relative',
      },
    },
    '& > .body': {
      padding: interval ? '2em 2em 0 2em' : '1.2em 0 1em 2em',
      marginBottom: interval ? '0' : '-3em',
      position: 'relative',
      top: interval ? '-1.875em' : '-4em',
      left: '2em',
      width: '95%',
      '& > .line': {
        backgroundColor: type ? type : '#000',
        content: '""',
        marginLeft: '-1px',
        position: 'absolute',
        top: '6.2em',
        left: '-0.2em',
        width: '2px',
        height: '40%',
        zIndex: 0,
      },
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
        fontSize: '11pt',
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
  css,
  children,
  className,
  order,
  interval,
  subtitle,
  title,
  type = '#000',
  line = false,
  ...props
}: TimelineItemProps & React.ComponentPropsWithoutRef<'li'>) => {
  const classes = useStyles({
    order,
    interval,
    subtitle,
    title,
    type,
    // linecolor,
    line,
    css,
  })
  const computedClassNames = classnames(classes.timelineItem, className)
  return (
    <Timeline>
      <li className={computedClassNames} {...props}>
        <label className={`icon`}>
          <span className={`text`}>{order}</span>
        </label>
        <div className={`body`}>
          {line && <div className={`line`} />}
          <p className={`date`}>{interval}</p>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <div className={`description`}>{children}</div>
        </div>
      </li>
    </Timeline>
  )
}
export default TimelineItem
