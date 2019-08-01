import React from 'react'
import * as style from '../../../App.css'
import ZhihuLogo from '../../../svg/ZhihuLogo'
import AppHeaderNav from './AppHeaderNav'
import SearchBar from './SearchBar'
import AppHeaderUserInfo from './AppHeaderUserInfo'

const AppHeaderInner: React.FC = props => {
  return (
    <div className={style['AppHeader-inner']}>
      <a>
        <ZhihuLogo />
      </a>
      <AppHeaderNav />
      <SearchBar />
      <AppHeaderUserInfo notificationsCount={3} messagesCount={1} />
    </div>
  )
}

export default AppHeaderInner
