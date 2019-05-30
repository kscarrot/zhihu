import React from 'react'
import './Searchbar.css'
import SearchIcon from '../../../svg/SearchIcon'

const InputAfter = props => {
    return (
        <div className="Input-after">
            <button className="Button SearchBar-searchIcon Button--primary">
                <span style={{display:"inline-flex",alignItems:"center"}}>
                    &#8203;
                    <SearchIcon/>
                </span>
            </button>
        </div>
    )
}

export default InputAfter

