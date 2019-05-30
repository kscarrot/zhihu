import React from 'react'
import ZhihuLogo from '../../svg/ZhihuLogo'
import SimleSearchBar from './SimpleSearchBar'
import './PageHeader.css'

const PageHeader = props => {
    return (
        <div className={props.isShown ? 'PageHeader' : 'PageHeader is-shown'}>
            <div className="TopstoryPageHeader">
                <div className="TopstoryPageHeader-main">
                    <a href="#">
                        <ZhihuLogo />
                    </a>
                </div>
                <div className="TopstoryPageHeader-aside">
                    <SimleSearchBar />
                    <button type="button" className="Button TopstoryPageHeader-askButton Button--primary Button--blue "
                    >提问</button>
                </div>
            </div>
        </div>
    )
}

export default PageHeader