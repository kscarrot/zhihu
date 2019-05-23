import React from 'react'
import './AppHeaderUserInfo.css'
import Bell from './Bell'
import Comments from './Comments'
import Avatar from './Avatar.jpg'

const AppHeaderUserInfo = props => {
    return (
        <div className="AppHeader-userInfo">
            <div className="Popover PushNotifications AppHeader-notifications">
                <button className="Button PushNotifications-icon Button--plain">
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        &#8203;
                        <Bell />
                    </span>
                </button>
            </div>
            <div className="Poopver Messages AppHeader-messages">
                <button className="Button PushNotifications-icon Button--plain">
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        &#8203;
                    <Comments />
                    </span>
                </button>
            </div>
            <div className="AppHeader-profile">
                <button className="Button Button--plain">
                    <img src={Avatar} alt="" width="30" height="30"/>
                </button>
            </div>
        </div>
    )
}

export default AppHeaderUserInfo