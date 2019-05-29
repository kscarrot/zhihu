import React from 'react'
import './PageHeader.css'

const PageHeader = props =>{
    return(
        <div className={props.isShown ? 'PageHeader' : 'PageHeader is-shown'}>
        <div className="TopstoryPageheader">
            PageHeader
        </div>
    </div>
    )
}

export default PageHeader