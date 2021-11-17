/** @jsxImportSource @emotion/react */
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'
import * as React from 'react'
import Overlay from '../Overlay'

type ToastProps = Partial<{
  show: boolean
  children: React.ReactNode
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
  className: string
}>

const Toast = ({ show = false, children, co, className }: ToastProps) => {
  const theme = useTheme() as Theme
  const styles = css({
    ...(typeof co == 'function' && co(theme)),
  })
  const computedToastClassNames = clsx(className)

  return (
    <Overlay css={styles} opacity={0} show={show} className={computedToastClassNames}>
      {children}
    </Overlay>
  )
}

export default Toast
