import React from 'react'
import './Searchbar.css'

const Input = props => {
    const normal = "SearchBar-input Input-wrapper  Input-wrapper--grey"
    const focused = "SearchBar-input SearchBar-focusedInput Input-wrapper Input-wrapper--grey is-focus"

    return (
        <div className={props.isfocused ? focused : normal}>
            <input
                onFocus={props.onFocus}
                onBlur={props.onBlur}
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