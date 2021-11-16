/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react'
import React from 'react'
import styled from '@emotion/styled'
import Timeline from './index'

interface TimelineItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  line?: Boolean
  interval?: string
  subtitle?: string
  title?: string
}

const TimelineItem = ({ icon, children }: TimelineItemProps) => {
  const Label = styled.label(props => ({
    position: 'absolute',
    display: 'block',
    outline: '10px solid white',
    top: 0,
    left: '1.71em',
    width: '0.9em',
    height: '0.9em',
    margin: '0.5em 0.5em 0.5em -0.5em',
    color: '#fff',
    borderRadius: '100%',
    backgroundColor: 'gray',
    zIndex: 1,
    '.text': {
      display: 'block',
      fontSize: '9pt',
      textAlign: 'center',
      position: 'relative',
    },
    '.line': {
      backgroundColor: 'gray',
      bottom: 0,
      boxSizing: 'content-box',
      marginLeft: '-1px',
      position: 'absolute',
      top: '2em',
      left: '0.45em',
      width: '2px',
      height: '3.5em',
      zIndex: -10,
    },
  }))
  const Body = styled.div(props => ({
    padding: '0.8em 0 1em 2em',
    marginBottom: '1.2em',
    position: 'relative',
    top: '-0.2em',
    left: '-1em',
    width: '95%',
  }))
  const Description = styled.div(props => ({
    fontSize: '.8em',
  }))
  const Line = styled.div(props => ({
    backgroundColor: 'gray',
    bottom: 0,
    boxSizing: 'content-box',
    marginLeft: '-1px',
    position: 'absolute',
    top: '2em',
    left: '1.657em',
    width: '2px',
    height: '80%',
    zIndex: -10,
  }))
  return (
    <Timeline>
      <Label>
        <span className='text'>{icon}</span>
        <div className='line' />
      </Label>
      <li>
        <Body>
          <Description>{children}</Description>
        </Body>
      </li>
      {/* <Line /> */}
    </Timeline>
  )
}
export default TimelineItem
