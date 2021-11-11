/** @jsxImportSource @emotion/react */
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'
import React from 'react'

type BreadcrumbsItem = Partial<{
  link: boolean
  title: string
  onClick: () => any
}>
type BreadcrumbsProps = Partial<{
  divider: React.ReactNode
  items: BreadcrumbsItem[]
  co: (theme: Theme) => React.CSSProperties
  className: string
  children: React.ReactNode
}>

const Breadcrumbs = ({ divider = '/', items = [], children, className, co }: BreadcrumbsProps) => {
  const theme = useTheme()
  const sliderStyles = css({
    display: 'inline-flex',
    alignItems: 'center',
    '& > *': {
      display: 'inline-flex',
    },
    ...co?.(theme as Theme),
  })

  const computedClassNames = clsx('breadcrumbs', className)

  return (
    <nav css={sliderStyles} className={computedClassNames}>
      {items.map((v, i) => {
        return (
          <div key={v.title}>
            <div onClick={v?.onClick}>{v.title}</div>
            {i != items.length - 1 &&
              (typeof divider == 'string' ? (
                <div
                  style={{
                    margin: '0em .4em',
                  }}>
                  {divider}
                </div>
              ) : (
                divider
              ))}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
