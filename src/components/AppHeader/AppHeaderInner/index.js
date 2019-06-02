import React, { useContext } from 'react'
import '../AppHeader.css'
import ZhihuLogo from '../../Svg/ZhihuLogo'
import AppHeaderNav from './AppHeaderNav'
import Searchbar from './Searchbar'
import AppHeaderUserInfo from './AppHeaderUserInfo'
import  {PageContext} from '../../Tool/PageState'

const AppHeaderInner = props => {
    const context = useContext(PageContext)
    return (
        <div className="AppHeader-inner">
            <a href="#" onClick={()=>console.log(context)}><ZhihuLogo /></a>
            <AppHeaderNav />
            <Searchbar />
            <AppHeaderUserInfo notificationsCount={3} messagesCount={1} />
        </div>
    )
}

export default AppHeaderInner