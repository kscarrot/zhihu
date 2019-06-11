import React ,{useState}from 'react'
import List from '../../../Svg/List'
import Heart from '../../../Svg/Heart'
import Users from '../../../Svg/Users'
import SettingButton from '../../../Svg/SettingButton'


const PushNotificationsMenu = props => {
    const [selected, setselected] = useState(0)

    const getclass = cmp=> state=>{
      if (cmp===state) {
          return "PushNotifications-tabIcon PushNotifications-selectedTabIcon"
      } else {
          return "PushNotifications-tabIcon"
      }
    }

    return (
        <div className="Menu PushNotifications-menu">
            <div className="PushNotifications-content">
                <div className="PushNotifications-header">
                    <button className="Button PushNotifications-tab Button--plain" onClick={()=>setselected(0)}>
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            <List className={getclass(0)(selected)}/>
                        </span>
                    </button>
                    <button className="Button PushNotifications-tab Button--plain" onClick={()=>setselected(1)}>
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            <Users className={getclass(1)(selected)}/>
                        </span>
                    </button>
                    <button className="Button PushNotifications-tab Button--plain" onClick={()=>setselected(2)}>
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            <Heart className={getclass(2)(selected)}/>
                        </span>
                        <span className="PushNotifications-redbot"></span>

                    </button>
                </div>
                <div className="PushNotifications-list"></div>
                <div className="Notifications-footer">
                    <a href="" className="Button Button--plain">
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            &#8203;
                            <SettingButton />
                        </span>
                    </a>
                    <a href="" className="Button Button--plain">查看全部通知</a>
                </div>
            </div>
        </div>
    )
}

export default PushNotificationsMenu