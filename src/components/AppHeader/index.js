import React from 'react'
import './AppHeader.css'
import ZhihuLogo from '../svg/ZhihuLogo'
import AppHeaderNav from './AppHeaderNav'
import Searchbar from './Searchbar'
import AppHeaderUserInfo from './AppHeaderUserInfo'
import PageHeader from './PageHeader'


const Header = props => {
    return (
        <div className="AppHeader">
            <div className="AppHeader-inner">
                <a href="#"><ZhihuLogo /></a>
                <AppHeaderNav />
                <Searchbar />
                <AppHeaderUserInfo />
            </div>
            <PageHeader isShown={props.isShown} />
        </div>
    )
}

export default Header