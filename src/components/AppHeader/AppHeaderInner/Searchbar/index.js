import React, { useState } from 'react'
import './Searchbar.css'
import Input from './Input'
import InputAfter from './InputAfter'

const Searchbar = props => {
    const [isfocused, setisfocused] = useState(false)

    const focus = () => {
        if (!isfocused) {
            setisfocused(true)
        }
    }

    const blur = () => {
        if (isfocused) {
            setisfocused(false)
        }
    }


    return (
        <div className="SearchBar">
            <div className="SearchBar-toolWrapper">
                <form className="SearchBar-tool">
                    <div className="Popover">
                        <Input isfocused={isfocused} onFocus={focus} onBlur={blur} />
                        <InputAfter />
                    </div>
                </form>
            </div>
            <button type="button" className={
                !isfocused
                    ? "Button SearchBar-askButton Button--primary Button--blue "
                    : "Button SearchBar-askButton  SearchBar-hiddenAskButton Button--primary Button--blue"}
            >提问</button>
        </div>
    )

}

export default Searchbar