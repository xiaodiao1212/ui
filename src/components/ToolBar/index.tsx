/** @jsxImportSource @emotion/react */
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'
import * as React from 'react'

type ToolBarProps = {
  shy?: boolean
  fixed?: boolean
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
} & React.ComponentPropsWithoutRef<'div'>

const ToolBar = ({ fixed = false, co, className, children, ...props }: ToolBarProps) => {
  const theme = useTheme() as Theme
  const styles = css({
    height: theme?.appBar?.height || '3em',
    backgroundColor: theme ? (theme.mode == 'light' ? theme.color.white : theme.color.black) : '#fff',
    ...(fixed
      ? {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme?.zIndex?.appBar || 700,
        }
      : {}),
    ...(typeof co == 'function' && co(theme)),
  })

  return (
    <header css={styles} className={clsx(className)} {...props}>
      {children}
    </header>
  )
}

export default ToolBar
