import React, { useEffect, useContext } from 'react'
import { PageContext } from './PageState'
import classnames from 'classnames'
import * as style from '../App.css'

interface PopoverProps {
  handleClose: { (): void }
  arrowDisabled: boolean
  offset: number
  halfpad: number
  top: number
}

const Popover: React.FC<PopoverProps> = props => {
  const { currentWidth } = useContext(PageContext)

  const { offset, halfpad, top, arrowDisabled, handleClose } = props

  const getOffSet = (width: number, offset: number, r: number) => {
    const halfPaddingOffset = width > 1032 ? (width - 1032) / 2 : 0
    return halfPaddingOffset + offset + r > width
      ? width - 2 * r
      : halfPaddingOffset + offset
  }

  useEffect(() => {
    document.addEventListener('click', handleClose)
    return () => document.removeEventListener('click', handleClose)
  })

  const handleClick: React.ReactEventHandler = e => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
  }

  const PopoverClass = classnames(
    style['Popover-content'],
    style['Popover-content--bottom'],
    style['Popover-content--fixed'],
    style['Popover-content--arrowed'],
    style['Popover-content--enter'],
  )

  const SpanClass = classnames(
    style['Popover-arrow'],
    style['Popover-arrow--bottom'],
  )

  return (
    <div
      className={PopoverClass}
      style={{
        left: getOffSet(currentWidth, offset, halfpad),
        top: top,
      }}
      onClick={handleClick}
    >
      {!arrowDisabled && (
        <span className={SpanClass} style={{ left: halfpad, top: 0 }}></span>
      )}
      {props.children}
    </div>
  )
}

export default Popover
