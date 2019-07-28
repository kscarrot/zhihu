import React, { useState } from 'react'
import * as style from '../../../App.css'
import Bell from '../../../svg/Bell'
import Comments from '../../../svg/Comments'
import Avatar from '../../../assert/Avatar.jpg'
// import ProfileMenu from './ProfileMenu'
// import MessagesMenu from './MessagesMenu'
// import PushNotificationsMenu from './PushNotificationsMenu'
// import Popover from '../../../Tool/Popover'
// import Portal from '../../../Tool/Portal'

interface UserInfoProps {
  notificationsCount: number
  messagesCount: number
}

const AppHeaderUserInfo: React.FC<UserInfoProps> = props => {
  const [notificationShown, setNotification] = useState(false)
  const [messagesShown, setMessages] = useState(false)
  const [profile, setProfile] = useState(false)
  const { notificationsCount, messagesCount } = props

  return (
    <div className={style['AppHeader-userInfo']}>
      <div className="Popover PushNotifications AppHeader-notifications">
        <button
          className="Button PushNotifications-icon Button--plain"
          onClick={() => setNotification(true)}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            &#8203;
            <Bell />
          </span>
          {notificationsCount > 0 && (
            <span className="PushNotifications-count">
              {notificationsCount}
            </span>
          )}
        </button>
        {/* {
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
                } */}
      </div>
      <div className="Popover Messages AppHeader-messages">
        <button
          className="Button PushNotifications-icon Button--plain"
          onClick={() => setMessages(true)}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            &#8203;
            <Comments />
          </span>
          {messagesCount > 0 && (
            <span className="Messages-count">{messagesCount}</span>
          )}
        </button>
        {/* {
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
                } */}
      </div>
      <div className="AppHeader-profile">
        <button
          className="Button Button--plain"
          onClick={() => setProfile(true)}
        >
          <img src={Avatar} alt="" width="30" height="30" />
        </button>
        {/* {
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
                } */}
      </div>
    </div>
  )
}

export default AppHeaderUserInfo
