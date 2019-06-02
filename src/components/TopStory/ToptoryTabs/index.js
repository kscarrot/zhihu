import React from 'react'
import { withRouter } from 'react-router'

const TopStoryTabs = props => {
    const defaultClassName = "TopstoryTabs-link Topstory-tabsLink"
    const activeClassName = "TopstoryTabs-link Topstory-tabsLink is-active"
    const changeRouter = target => e => {
        e.preventDefault()
        if (window.scrollY > 69) {
            window.scrollTo({ left: 0, top: 69, behavior: 'smooth' })
        }
        props.history.push(target)
        const hash =  {
            "/": "r",
            "/follow":"f",
            "/hot":"h",
        }
        document.cookie = `tst=${hash[target]}`
    }
    const changeActive = target => props.location.pathname === target ? activeClassName : defaultClassName

    return (
        <nav className={"TopstoryTabs " + props.cName}>
            <a href="/" onClick={changeRouter("/")} className={changeActive("/")}>推荐</a>
            <a href="/follow" onClick={changeRouter("/follow")} className={changeActive("/follow")}>关注</a>
            <a href="/hot" onClick={changeRouter("/hot")} className={changeActive("/hot")}>热榜</a>
        </nav>
    )
}

const TopStoryTabsWithRouter = withRouter(TopStoryTabs)

export default TopStoryTabsWithRouter