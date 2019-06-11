import React from 'react'
import TopStoryMain from './TopstoryMain'
import GlobalSideBar from './GlobalSideBar'
import './TopStory.css'

const TopStory = () => {
    return (
        <div className="TopStory-container">
            <TopStoryMain />
            <GlobalSideBar />
        </div>
    )
}

export default TopStory