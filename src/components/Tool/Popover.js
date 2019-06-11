import React, { useEffect, useContext } from 'react'
import { PageContext } from './PageState'

const Popover = props => {
    const pagecontext = useContext(PageContext)

    const getOffSet = (width, offset, r) => {
        const halfPaddingOffset = width > 1032 ? (width - 1032) / 2 : 0
        return halfPaddingOffset + offset + r > width ? width - 2 * r : halfPaddingOffset + offset
    }

    useEffect(() => {
        document.addEventListener('click', props.handleClose)
        return () => document.removeEventListener('click', props.handleClose)
    }, [])

    const handleClick = e => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
    }

    return (
        <div
            className="Popover-content Popover-content--bottom Popover-content--fixed Popover-content--arrowed Popover-content-enter-done"
            style={{ left: getOffSet(pagecontext.currentWidth, props.offset, props.halfpad), top: props.top }}
            onClick={handleClick}
        >
            {
                !props.arrowDisabled&&
                <span className="Popover-arrow Popover-arrow--bottom" style={{ left: props.halfpad, top: 0 }} ></span>
            }
            {props.children}
        </div>
    )
}

export default Popover