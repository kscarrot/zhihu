import React from 'react'
import '../TopStory.css'
import GlobalWrite from './GlobalWrite'
import CategoryList from './CategoryList'
import NavList from './NavList'
import Footer from './Footer'

const GolbalSideBar = props => {
    return (
        <div className="GlobalSideBar">
            <div className="Card">
                <GlobalWrite number={4}/>
            </div>
            <div className="Card">
                <CategoryList/>
            </div>
            <div className="Card">
                <NavList/>
            </div>
            <Footer/>
        </div>
    )
}

export default GolbalSideBar