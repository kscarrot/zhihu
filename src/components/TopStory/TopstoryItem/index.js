import React from 'react'
import FeedSource from './FeedSource'
import ContentItemActions from './ContentItemActions'

const TopstoryItem = props => {

    return (
        <div className="Card TopstoryItem TopstoryItem-isFollow">
            <div className="Feed">
                <FeedSource actors={props.itemData.actors} action_text_tpl={props.itemData.action_text_tpl} author={props.itemData.target.author} createTime={props.itemData.created_time} />
                <div className="ContentItem">
                    <h2 className="ContentItem-title">{props.itemData.target.question.title}</h2>
                    <div className="RichContent is-collapsed">
                        {props.itemData.target.thumbnail &&
                            <div className="RichContent-cover">
                                <div className="RichContent-cover">
                                    <img src={props.itemData.target.thumbnail} />
                                </div>
                            </div>
                        }
                        <div className="RichContent-inner">
                            <span className="RichTet ztext CopyrightRichText-richText"
                                dangerouslySetInnerHTML={{
                                    __html: (
                                        props.itemData.target.excerpt.length > 100
                                            ? props.itemData.target.excerpt.slice(0, 101) + "..."
                                            : props.itemData.target.excerpt
                                    )
                                }}>
                            </span>
                            {
                                props.itemData.target.excerpt.length > 100 &&
                                <button type="button" className="Button ContentItem-more Button--plain">阅读全文
                                <span style={{ display: "inline-flex", alignItems: "center" }}>​<svg className="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fillRule="evenodd"></path></svg></span>
                                </button>
                            }
                        </div>
                        <ContentItemActions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopstoryItem