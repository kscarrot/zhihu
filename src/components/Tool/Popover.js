import React, { useEffect } from 'react'

const Popover = props => {

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
            style={props.selfOffset}
            onClick={handleClick}
        >
            <span className="Popover-arrow Popover-arrow--bottom" style={props.arrowOffset} ></span>
            {props.children}
        </div>
    )
}

export default Popover