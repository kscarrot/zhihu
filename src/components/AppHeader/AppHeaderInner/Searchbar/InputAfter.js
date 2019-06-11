import React from 'react'
import './Searchbar.css'
import SearchIcon from '../../../Svg/SearchIcon'

const InputAfter = props => {
    const handleClick = e=>{
        e.preventDefault()
        props.handleClick()
    }
    
    return (
        <div className="Input-after">
            <button className="Button SearchBar-searchIcon Button--primary" onClick={handleClick}>
                <span style={{display:"inline-flex",alignItems:"center"}}>
                    &#8203;
                    <SearchIcon/>
                </span>
            </button>
        </div>
    )
}

export default InputAfter

