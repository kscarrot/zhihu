import React from 'react'
import './SimpleSearchbar.css'
import SearchIcon from '../../../Svg/SearchIcon'


const Searchbar = props => {
    return (
        <form className="SimpleSearchBar-wrapper">
            <div className="SimpleSearchBar-input TopStoryPageHeader-searchBar Input-wrapper-simpleSearchBar">
                <input type="text" className="Input" placeholder="搜索你感兴趣的内容..." />
                <div className="Input-after">
                    <button className="Button-simpleSearchBar TopStoryPageHeader-searchButton Button--primary">
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </form>
    )

}

export default Searchbar