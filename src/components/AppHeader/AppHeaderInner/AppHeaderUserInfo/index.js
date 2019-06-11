import React, { useState} from 'react'
import './AppHeaderUserInfo.css'
import Bell from '../../../Svg/Bell'
import Comments from '../../../Svg/Comments'
import Avatar from './Avatar.jpg'
import ProfileMenu from './ProfileMenu'
import MessagesMenu from './MessagesMenu'
import PushNotificationsMenu from './PushNotificationsMenu'
import Popover from '../../../Tool/Popover'
import Portal from '../../../Tool/Portal'

const AppHeaderUserInfo = props => {
    const [notificationShown, setNotification] = useState(false)
    const [messagesShown, setMessages] = useState(false)
    const [profile, setProfile] = useState(false)

    return (
        <div className="AppHeader-userInfo">
            <div className="Popover PushNotifications AppHeader-notifications">
                <button className="Button PushNotifications-icon Button--plain" onClick={() => setNotification(true)}>
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        &#8203;
                        <Bell />
                    </span>
                    {props.notificationsCount !== undefined &&
                        <span className="PushNotifications-count">{props.notificationsCount}</span>
                    }
                </button>
                {
                    notificationShown &&
                    <Portal>
                        <Popover
                            handleClose={() => setNotification(false)}
                            offset={692}
                            halfpad={181}
                            top={37}
                            >
                            <PushNotificationsMenu />
                        </Popover>
                    </Portal>
                }
            </div>
            <div className="Popover Messages AppHeader-messages">
                <button className="Button PushNotifications-icon Button--plain" onClick={() => setMessages(true)}>
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        &#8203;
                    <Comments />
                    </span>
                    {props.messagesCount !== undefined &&
                        <span className="Messages-count">{props.messagesCount}</span>
                    }
                </button>
                {
                    messagesShown &&
                    <Portal>
                        <Popover
                            handleClose={() => setMessages(false)}
                            offset={754}
                            halfpad={181}
                            top={37}
                        >
                            <MessagesMenu />
                        </Popover>
                    </Portal>
                }
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
                            offset={934}
                            halfpad={67}
                            top={41.5}>
                            <ProfileMenu />
                        </Popover>
                    </Portal>
                }
            </div>
        </div>
    )
}

export default AppHeaderUserInfo