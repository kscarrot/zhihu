import React, { useState } from 'react'
import List from '../../../svg/List'
import Heart from '../../../svg/Heart'
import Users from '../../../svg/Users'
import SettingButton from '../../../svg/SettingButton'
import classnames from 'classnames'
import * as style from '../../../App.css'
const PushNotificationsMenu: React.FC = props => {
  enum Page {
    List,
    Users,
    Heart,
  }
  const [selected, setselected] = useState(Page.List)

  const getclass = (cuerrent: Page) => (state: Page) =>
    classnames(style['PushNotifications-tab'], {
      [style['PushNotifications-selectedTabIcon']]: cuerrent === state,
    })

  return (
    <div className="Menu PushNotifications-menu">
      <div className="PushNotifications-content">
        <div className="PushNotifications-header">
          <button
            className="Button PushNotifications-tab Button--plain"
            onClick={() => setselected(Page.List)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <List svgclass={getclass(Page.List)(selected)} />
            </span>
          </button>
          <button
            className="Button PushNotifications-tab Button--plain"
            onClick={() => setselected(Page.Users)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Users svgclass={getclass(Page.Users)(selected)} />
            </span>
          </button>
          <button
            className="Button PushNotifications-tab Button--plain"
            onClick={() => setselected(Page.Heart)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Heart svgclass={getclass(Page.Heart)(selected)} />
            </span>
            <span className="PushNotifications-redbot"></span>
          </button>
        </div>
        <div className="PushNotifications-list"></div>
        <div className="Notifications-footer">
          <a href="" className="Button Button--plain">
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              &#8203;
              <SettingButton />
            </span>
          </a>
          <a href="" className="Button Button--plain">
            查看全部通知
          </a>
        </div>
      </div>
    </div>
  )
}

export default PushNotificationsMenu
