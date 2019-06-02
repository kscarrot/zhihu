import React, { useState } from 'react'
import './AppHeaderUserInfo.css'
import Bell from './Bell'
import Comments from './Comments'
import Avatar from './Avatar.jpg'
import Portal from '../../../Tool/Portal'
import ProfileMenu from './ProfileMenu'
import Popover from '../../../Tool/Popover'

const AppHeaderUserInfo = props => {
    const [notificationShown, setNotification] = useState(false)
    const [messagesShown, setMessages] = useState(false)
    const [profile, setProfile] = useState(true)

    const getOffSet = (width, offset) => width > 1032 ? (width - 1032) / 2 + offset : offset

    const offsetList = {
        notifications: { selfOffset: { left: getOffSet(props.currtentWidth, 934), top: 41.5 }, arrowOffset: { left: 67, top: 0 } },
        messages: { selfOffset: { left: getOffSet(props.currtentWidth, 934), top: 41.5 }, arrowOffset: { left: 67, top: 0 } },
        profile: { selfOffset: { left: getOffSet(1440, 934), top: 41.5 }, arrowOffset: { left: 67, top: 0 } },
    }

    return (
        <div className="AppHeader-userInfo">
            <div className="Popover PushNotifications AppHeader-notifications">
                <button className="Button PushNotifications-icon Button--plain">
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        &#8203;
                        <Bell />
                    </span>
                    {props.notificationsCount !== undefined &&
                        <span className="PushNotifications-count">{props.notificationsCount}</span>
                    }
                </button>
            </div>
            <div className="Popover Messages AppHeader-messages">
                <button className="Button PushNotifications-icon Button--plain">
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        &#8203;
                    <Comments />
                    </span>
                    {props.messagesCount !== undefined &&
                        <span className="Messages-count">{props.messagesCount}</span>
                    }
                </button>
            </div>
            <div className="AppHeader-profile">
                <button className="Button Button--plain" onClick={() => setProfile(true)}>
                    <img src={Avatar} alt="" width="30" height="30" />
                </button>
                {
                    profile &&
                    <Portal>
                        <Popover
                            handleClose={() => setProfile(false)}
                            selfOffset={offsetList.profile.selfOffset}
                            arrowOffset={offsetList.profile.arrowOffset}>
                            <ProfileMenu />
                        </Popover>
                    </Portal>
                }   
            </div>
        </div>
    )
}

export default AppHeaderUserInfo