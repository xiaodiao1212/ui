/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme'
import React from 'react'
import styled from '@emotion/styled'

interface ColProps {
  flexSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal'
  textAlign?: 'center' | 'left' | 'right'
  flex?: number | string
  noFlex?: boolean
  autoMargin?: boolean
  children: React.ReactNode
  co?: (theme: Theme) => React.CSSProperties
}

const Col = ({ children, textAlign, noFlex, flex, autoMargin, co }: ColProps) => {
  const Container = styled.div(ColProps => ({
    textAlign: textAlign ? textAlign : 'center',
    flex: flex ? flex : '1',
    noFlex: noFlex ? noFlex : false,
    ...(autoMargin ? { marginLeft: 'auto' } : { flex: noFlex ? '' : flex }),
    ...co?.(theme as Theme),
  }))
  return <Container>{children}</Container>
}

export default Col
