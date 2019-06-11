import React,{useContext} from 'react'
import './AppHeader.css'
import PageHeader from './PageHeader'
import AppHeaderInner from './AppHeaderInner'
import  {PageContext} from '../Tool/PageState'


const Header = props => {
    const pagecontext = useContext(PageContext)

    let innerStyle = pagecontext.isAppHeaderSticky && pagecontext.currentWidth
        ? { width: pagecontext.currentWidth, top: 0, left: 0 } : undefined

    let headerClass = pagecontext.isAppHeaderSticky
        ? "Sticky AppHeader is-fixed"
        : "Sticky AppHeader "
    return (
        <>
            <header className={headerClass} style={innerStyle}>
                <AppHeaderInner />
                <PageHeader isShown={pagecontext.isAppHeaderShown} />
            </header>
            {pagecontext.isAppHeaderSticky &&
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