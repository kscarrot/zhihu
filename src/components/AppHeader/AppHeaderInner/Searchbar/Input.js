import React from 'react'
import './Searchbar.css'

const Input = props => {
    const normal = "SearchBar-input Input-wrapper  Input-wrapper--grey"
    const focused = "SearchBar-input SearchBar-focusedInput Input-wrapper Input-wrapper--grey is-focus"
    const handleChange = e =>{
        props.setInputText(e.target.value)
    }
    return (
        <div className={props.isfocused ? focused : normal}>
            <input
                onChange = {handleChange}
                onClick={props.onClick}
                type="text"
                maxLength="100"
                autoComplete="off"
                role="combobox"
                className="Input"
                placeholder="后宫嫔妃争宠 | 宫墙柳" />
        </div>
    )
}

export default Input