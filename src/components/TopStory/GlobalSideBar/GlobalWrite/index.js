import React from 'react'
import '../../TopStory.css'
import Paper from './Paper'
import WriteArcticle from './WriteArticle'
import WritePin from './WritePin'
import Draft from './Draft'

const GlobalWrite = props => {
    return (
        <div className="GolbalWrite">
            <div className="GlobalWrite-nav">
                <a href="#" className="GlobalWrite-navItem">
                    <Paper/>
                    <div className="GlobalWrite-navTitle">写回答</div>
                </a>
                <a href="#" className="GlobalWrite-navItem">
                    <WriteArcticle/>
                    <div className="GlobalWrite-navTitle">写文章</div>
                </a>
                <a href="#" className="GlobalWrite-navItem">
                    <WritePin/>
                    <div className="GlobalWrite-navTitle">写想法</div>
                </a>
            </div>
            <div className="GlobalWrite-draft">
                <a href="#" className="GlobalSideBar-navLink">
                    <Draft/>
                    <div className="GlobalSideBar-navText">我的草稿</div>
                    <div className="GlobalSideBar-navNumber">{props.number}</div>
                </a>
            </div>
        </div>
    )
}

export default GlobalWrite