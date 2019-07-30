import React from 'react'
import Profile from '../../../svg/Profile'
import Creator from '../../../svg/Creator'
import Settings from '../../../svg/Settings'
import Logout from '../../../svg/Logout'
import * as style from '../../../App.css'
import classnames from 'classnames'

const ProfileMenu: React.SFC = () => {
  const handleClick: React.ReactEventHandler = e => {
    e.preventDefault()
  }

  const baseButtonClass = classnames(
    style.Button,
    style['Menu-item'],
    style['AppHeaderProfileMenu-item'],
    style['Button--plain'],
  )

  const listItem = (Icon: React.ReactNode, text: string) => (
    <a
      href=""
      type="button"
      onClick={handleClick}
      className={baseButtonClass}
      key={text}
    >
      {Icon}
      {text}
    </a>
  )

  const list = [
    { text: '我的主页', icon: <Profile /> },
    { text: '创作者中心', icon: <Creator /> },
    { text: '设置', icon: <Settings /> },
    { text: '退出', icon: <Logout /> },
  ]

  return (
    <div className="Menu AppHeaderProfileMenu">
      {list.map(e => listItem(e.icon, e.text))}
    </div>
  )
}

export default ProfileMenu
