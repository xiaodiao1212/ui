import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { createUseStyles } from 'react-jss'
import { Theme } from '../../constants/theme'
type ListProps = {
  cssOptions?: (theme: Theme) => React.CSSProperties
}
type ListItemProps = {
  className?: string
  children?: React.ReactNode
  cssOptions?: (theme: Theme) => React.CSSProperties
}

const useListStyles = createUseStyles<'list', Pick<ListProps, 'cssOptions'>, Theme>((theme) => ({
  list: ({ cssOptions }) => {
    return {
      ...cssOptions?.(theme),
    }
  },
}))

const useListItemStyles = createUseStyles<'list-item', Pick<ListProps, 'cssOptions'>, Theme>((theme) => ({
  'list-item': ({ cssOptions }) => {
    return {
      ...cssOptions?.(theme),
    }
  },
}))
const List = ({ cssOptions, className, children, ...props }: ListProps & React.ComponentPropsWithoutRef<'div'>) => {
  const classes = useListStyles({
    cssOptions,
  })

  const computedListClassnames = classnames(classes.list, className)

  return (
    <div className={computedListClassnames} {...props}>
      {children}
    </div>
  )
}

const ListItem = ({ children, className, cssOptions }: ListItemProps) => {
  const classes = useListItemStyles({
    cssOptions,
  })
  const computedListClassnames = classnames(classes['list-item'], className)
  return <div className={computedListClassnames}>{children}</div>
}
List.Item = ListItem
export default List
