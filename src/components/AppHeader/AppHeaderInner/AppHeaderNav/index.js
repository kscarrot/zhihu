import React from 'react'
import './AppHeaderNav.css'

const AppHeaderNav = () => (
    <ul role="navigation" className="Tabs AppHeader-Tabs">
        <li className="Tabs-item AppHeader-Tab Tabs-item--noMeta" href="/">
            <a className="Tabs-link AppHeader-TabsLink is-active">首页</a>
        </li>
        <li className="Tabs-item AppHeader-Tab Tabs-item--noMeta" href="/">
            <a className="Tabs-link AppHeader-TabsLink">发现</a>
        </li>
        <li className="Tabs-item AppHeader-Tab Tabs-item--noMeta" href="/">
            <a className="Tabs-link AppHeader-TabsLink">话题</a>
        </li>
    </ul>
)

export default AppHeaderNav