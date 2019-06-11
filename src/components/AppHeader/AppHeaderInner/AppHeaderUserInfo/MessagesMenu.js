import React from 'react'
import EditButton from '../../../Svg/EditButton'

const MessagesMenu = props => {

    const handleClick = e => {
        e.preventDefault()
    }

    return (
        <div className="Menu Messages-menu">
            <div className="Messages-content">
                <div className="Messages-header">
                    <button className="Button Messages-tab Messages-myMessageTab Button--plain">我的私信</button>
                </div>
                <div className="Messages-list"></div>
                <div className="Messages-footer">
                    <button className="Button Button--plain">
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            &#8203;<EditButton style={{ marginRight: 4 }} />
                        </span>
                        写新私信
                        </button>
                    <a href="/" onClick={handleClick} className="Button Button--plain">查看全部私信</a>
                </div>
            </div>
        </div>
    )
}

export default MessagesMenu