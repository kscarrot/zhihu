import React from 'react'
import Profile from './Profile'
import Creator from './Creator'
import Settings from './Settings'
import Logout from './Logout'

const ProfileMenu = props => {
     
    const handleClick = e=>{
        e.preventDefault()
    }
    return (
            <div className="Menu AppHeaderProfileMenu">
                <a href="" type="button" onClick={handleClick} className="Button Menu-item AppHeaderProfileMenu-item Button--plain">
                    <Profile/>
                    我的主页
                </a>
                <a href="" type="button" onClick={handleClick} className="Button Menu-item AppHeaderProfileMenu-item Button--plain">
                    <Creator/>
                    创作者中心
                </a>
                <a href="" type="button" onClick={handleClick} className="Button Menu-item AppHeaderProfileMenu-item Button--plain">
                    <Settings/>
                    设置
                </a>
                <a href="" type="button" onClick={handleClick} className="Button Menu-item AppHeaderProfileMenu-item Button--plain">
                    <Logout/>
                    退出
                </a>
            </div>
    )
}

export default ProfileMenu