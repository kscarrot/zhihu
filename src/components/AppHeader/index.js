import React from 'react'
import './AppHeader.css'
import PageHeader from './PageHeader'
import AppHeaderInner from './AppHeaderInner'


const Header = props => {
    let innerStyle = props.isSticky && props.currentWidth
        ? { width: props.currentWidth, top: 0, left: 0 } : undefined

    let headerClass = props.isSticky
        ? "Sticky AppHeader is-fixed"
        : "Sticky AppHeader "
    return (
        <>
            <header className={headerClass} style={innerStyle}>
                <AppHeaderInner />
                <PageHeader isShown={props.isShown} />
            </header>
            {props.isSticky &&
                <div
                    className="Sticky--holder"
                    style={{
                        position: "relative",
                        top: 0,
                        right: 0,
                        left: 0,
                        display: "block",
                        float: "none",
                        margin: 0,
                        height: "52px",
                        minWidth: "1032px"
                    }}>
                </div>
            }
        </>
    )
}

export default Header