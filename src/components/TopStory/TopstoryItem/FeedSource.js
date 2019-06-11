import React, { useState } from 'react'

const FeedSource = props => {

    const updateTimeString = createTime => {
        if (!props.createTime) return ''
        const duration = (+Date.now() / 1000) - createTime
        if (duration < 60) {
            return '刚刚'
        } else if (duration < 3600) {
            return `${Math.floor(duration / 60)}分钟前`
        } else if (duration < 86400) {
            return `${Math.floor(duration / 3600)}小时前`
        } else {
            return `${Math.floor(duration / 86400)}天前`
        }
    }

    return (
        <div className="FeedSource">
            <div className="FeedSource-firstline">
                <span>{props.actors[0].name}</span>
                {props.action_text_tpl.replace(/{}/, '')}
                <span className="Bull"> · </span>
                {updateTimeString(props.createTime)}
            </div>
            <div className="AuthorInfo FeedSource-byline AuthorInfo--plain">
                <div className="UserLink-link">
                    <img src={props.author.avatar_url} width="24" height="24" className="Avatar AuthorInfo-avatar" />
                </div>
                <div className="AuthorInfo-content">
                    <div className="AuthorInfo-head">
                        <span className="UserLink AuthorInfo-name">
                            <div className="UserLink-link">
                                {props.author.name}
                            </div>
                        </span>
                    </div>
                    <div className="AuthorInfo-detail">
                        <div className="AuthorInfo-badge">
                            <div className="ztext AuthorInfo-badgeText">
                                {props.author.headline}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FeedSource