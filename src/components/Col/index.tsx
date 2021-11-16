/** @jsxImportSource @emotion/react */

import { theme, Theme } from '../../constants/theme'
import React from 'react'
import styled from '@emotion/styled'
import clsx from 'clsx'

interface ColProps {
  flexSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal'
  textAlign?: 'center' | 'left' | 'right'
  flex?: number | string
  noFlex?: boolean
  autoMargin?: boolean
  children: React.ReactNode
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

const Col = ({
  children,
  textAlign,
  noFlex,
  flex,
  autoMargin,
  co,
  className,
}: ColProps & React.ComponentPropsWithoutRef<'div'>) => {
  const Container = styled.div({
    textAlign: textAlign ? textAlign : 'center',
    flex: flex ? flex : '1',
    noFlex: noFlex ? noFlex : false,
    ...(autoMargin ? { marginLeft: 'auto' } : { flex: noFlex ? '' : flex }),
    ...(typeof co == 'function' && co(theme)),
  })
  return <Container className={clsx(className)}>{children}</Container>
}

export default Col
