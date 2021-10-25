import * as React from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'

type RuleNames = 'timeline'
interface TimelineProps {
  cssOptions?: (theme: Theme) => React.CSSProperties
}

const useStyles = createUseStyles<RuleNames, TimelineProps, Theme>(theme => ({
  timeline: ({ cssOptions }) => ({
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
      '& > p': {
        fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
      '& > .timeline': {
        position: 'relative',
        maxWidth: '95%',
        listStyle: 'none',
        // '& > .line': {
        //   backgroundColor: linecolor,  
        //   content: '""',     
        //   marginLeft: '-1px',
        //   position: 'relative',
        //   top: '0em',
        //   left: '-5.15em',
        //   width: '2px',
        //   height: '80%',
        //   zIndex: 1,
        // },
        // paddingBottom: '20px',
	      // paddingLeft: '25px',
        // '&:after': {
        //   backgroundColor: linecolor,
        //   bottom: 0,
        //   boxSizing: 'content-box',
        //   content: '""',
        //   marginLeft: '-1px',
        //   position: 'absolute',
        //   top: 0,
        //   left: '1.85em',
        //   width: '2px',
        //   height: '100%',
        //   zIndex: -1,
        // }
      },
  }),
}))
const Timeline = ({
  cssOptions,
  children,
  className,
  ...props
}: TimelineProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useStyles({
    cssOptions,
  })
  const computedClassNames = classnames(classes.timeline, className);

  // const handleChildrenRender = () => {
  //   React.Children.map(children, (child: any, i) => {    
  //     const count = React.Children.count(children);
  //     console.log('child:', child)
  //     console.log('index:', i)
  //   })
  //   console.log('length:', React.Children.count(children))
  // }
  // console.log('handleChildrenRender:', handleChildrenRender())
  return (
    <div className={computedClassNames} {...props}>
      <ul className={`timeline`}>
       {children}
       {/* <div className={`line`} /> */}
      </ul>
    </div>
  )
}
export default Timeline;
