/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme'
import React from 'react'
import styled from '@emotion/styled'

interface TimelineProps {
  children: React.ReactNode
  co?: (theme: Theme) => React.CSSProperties
}

const Timeline = ({ children, co }: TimelineProps) => {
  const Container = styled.div(ColProps => ({
    fontSize: '1em',
    fontWeight: 300,
    lineHeight: 1.5,
    letterSpacing: '0.05em',
    ...co?.(theme as Theme),
    margin: 0,
    padding: 0,
    border: 0,
    font: 'inherit',
    verticalAlign: 'baseline',
    ' .timeline': {
      position: 'relative',
      maxWidth: '95%',
      listStyle: 'none',
    },
  }))
  return (
    <Container>
      <ul className='timeline'>{children}</ul>
    </Container>
  )
}

export default Timeline
