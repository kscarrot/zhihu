import React from 'react'
import NavListItem from './NavListItem'
import Star from './Star'
import HelpBubble from './HelpBubble'
import Invite from './Invite'
import Community from './Community'
import CopyRight from './CopyRight'

const NavList = props => {
    const list = [
        { text: "我的收藏", name: "GlobalSidebar-starItem", svg: <Star />, number: null },
        { text: "我关注的问题", name: "GlobalSidebar-questionListItem", svg: <HelpBubble />, number: 3 },
        { text: "我的邀请", name: "GlobalSidebar-inviteItem", svg: <Invite />, number: 12 },
        { text: "站务中心", name: "GlobalSidebar-serviceItem", svg: <Community />, number: null },
        { text: "版权服务中心", name: "GlobalSidebar-copyrightItem", svg: <CopyRight />, number: null },
    ]

    const click = e => {
         e.preventDefault()
    }

    return (
        <ul className="GlobalSideBar-navList">
            {list.map(item => {
                return <NavListItem
                    key={item.name}
                    cName={item.name}
                    itemText={item.text}
                    itemSvg={item.svg}
                    number={item.number}
                    click = {click}
                />
            })}
        </ul>
    )
}

export default NavList