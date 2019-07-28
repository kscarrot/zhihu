import React from 'react'
import classnames from 'classnames'
import * as style from '../../../App.css'

const AppHeaderNav: React.FC = props => {
  const TabsUlClass = classnames(style.Tabs, style['AppHeader-Tabs'])
  const TabsLiClass = classnames(
    style['Tabs-link'],
    style['AppHeader-Tab'],
    style['Tabs-item'],
  )
  const TabsLinkClass = classnames(
    style['Tabs-link'],
    style['AppHeader-TabsLink'],
  )

  return (
    <ul role="navigation" className={TabsUlClass}>
      <li className={TabsLiClass}>
        <a className={TabsLinkClass + 'is-active'} href="/">
          首页
        </a>
      </li>
      <li className={TabsLiClass}>
        <a className={TabsLinkClass} href="/">
          发现
        </a>
      </li>
      <li className={TabsLiClass}>
        <a className={TabsLinkClass} href="/">
          话题
        </a>
      </li>
    </ul>
  )
}
export default AppHeaderNav
