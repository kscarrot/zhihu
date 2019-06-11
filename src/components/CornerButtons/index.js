import React ,{useContext} from 'react'
import FeedBack from './FeedBack'
import BackTop from './BackTop'
import  {PageContext} from '../Tool/PageState'

import './CornerButtons.css'
const CornerButtons = () => {
    const pagecontext = useContext(PageContext)

    let backTopClass = pagecontext.isBacktopShown ? "CornerAnimayedFlex" : "CornerAnimayedFlex CornerAnimayedFlex--hidden"
    const handleScrollTop = () => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })

    return (
        <div className="CornerButtons">
            <div className="CornerAnimayedFlex">
                <button className="Button CornerButton Button--plain">
                    <FeedBack />
                </button>
            </div>
            <div className={backTopClass}>
                <button className="Button CornerButton Button--plain" onClick={handleScrollTop}>
                    <BackTop />
                </button>
            </div>
        </div>
    )
}

export default CornerButtons