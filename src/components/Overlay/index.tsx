/** @jsxImportSource @emotion/react */
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'
import * as React from 'react'

type OverlayProps = Partial<{
  color: string
  show: boolean
  blur: boolean
  opacity: string | number
  children: React.ReactNode
  noAnimation: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  co: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
  className: string
}>

const Overlay = ({
  opacity = 1,
  noAnimation = false,
  blur = false,
  color,
  show = false,
  children,
  onClick,
  co,
  className,
}: OverlayProps) => {
  const theme = useTheme() as Theme
  const styles = css({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: color || theme?.color?.greyLight || '#F3F4F6',
    backdropFilter: blur ? 'blur(4px)' : '',
    zIndex: theme.zIndex.overlay,
    transition: noAnimation ? 'all .4s' : '',
    ...(show ? { opacity: opacity } : { display: 'none', opacity: 0 }),

    ...(typeof co == 'function' && co(theme)),
  })
  const computedOverlayClassNames = clsx(className)
  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick?.(e)
  }
  return (
    <aside css={styles} className={computedOverlayClassNames} onClick={handleClickOverlay}>
      {children}
    </aside>
  )
}

export default Overlay
