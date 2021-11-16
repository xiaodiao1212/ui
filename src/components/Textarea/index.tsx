/** @jsxImportSource @emotion/react */
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'
import * as React from 'react'
type TextareaProps = {
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

const Textarea = ({ co, className, ...props }: TextareaProps & React.ComponentPropsWithoutRef<'textarea'>) => {
  const theme = useTheme() as Theme
  const styles = css({
    width: '100%',
    padding: '12px',
    backgroundColor: theme ? (theme.mode == 'light' ? theme.color.greyLight : theme.color.white) : 'transparent',
    color: theme ? (theme.mode == 'light' ? theme.color.black : theme.color.white) : '#111827',
    ...(typeof co == 'function' && co(theme)),
  })

  const computedClassNames = clsx(className)
  return <textarea css={styles} className={computedClassNames} {...props} />
}

export default Textarea
