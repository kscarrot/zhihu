import React from 'react'
import * as style from '../../../App.css'
import ZhihuLogo from '../../../svg/ZhihuLogo'
import AppHeaderNav from './AppHeaderNav'
// import Searchbar from './Searchbar'
import AppHeaderUserInfo from './AppHeaderUserInfo'

const AppHeaderInner: React.FC = props => {
  return (
    <div className={style['AppHeader-inner']}>
      <a>
        <ZhihuLogo />
      </a>
      <AppHeaderNav />
      {/* <Searchbar /> */}
      <AppHeaderUserInfo notificationsCount={3} messagesCount={1} />
    </div>
  )
}

export default AppHeaderInner
