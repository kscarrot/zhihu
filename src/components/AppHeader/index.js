import React from 'react'
import './AppHeader.css'
import ZhihuLogo from '../svg/ZhihuLogo'
import AppHeaderNav from './AppHeaderNav'
import Searchbar from './Searchbar'
import AppHeaderUserInfo from './AppHeaderUserInfo'
import PageHeader from './PageHeader'


const Header = props => {
    let innerStyle = props.isSticky && props.currentWidth
        ? { width: props.currentWidth, top: 0, left: 0 } : undefined

    return (
        props.isSticky ?
            <>
                <header className="Sticky AppHeader is-fixed" style={innerStyle}>
                    <div className="AppHeader-inner">
                        <a href="#"><ZhihuLogo /></a>
                        <AppHeaderNav />
                        <Searchbar />
                        <AppHeaderUserInfo notificationsCount={3} messagesCount={1} />
                    </div>
                    <PageHeader isShown={props.isShown} />
                </header>
                <div className="Sticky--holder" style={{ position: "relative", top: 0, right: 0, left: 0, display: "block", float: "none", margin: 0, height: "52px", minWidth: "1032px" }}></div>
            </>
            :
            <header className="Sticky AppHeader">
                <div className="AppHeader-inner">
                    <a href="#"><ZhihuLogo /></a>
                    <AppHeaderNav />
                    <Searchbar />
                    <AppHeaderUserInfo notificationsCount={3} messagesCount={1} />
                </div>
                <PageHeader isShown={props.isShown} />
            </header>
    )
}

export default Header