import React from 'react'
import './Searchbar.css'

interface InputProps {
  isfocused: boolean
  setInputText: () => void
  onClick: () => void
}

const Input: React.FC<InputProps> = props => {
  const normal = 'SearchBar-input Input-wrapper  Input-wrapper--grey'
  const focused =
    'SearchBar-input SearchBar-focusedInput Input-wrapper Input-wrapper--grey is-focus'
  const handleChange: React.ReactEventHandler = e => {
    // props.setInputText(e.target.value)
  }
  return (
    <div className={props.isfocused ? focused : normal}>
      <input
        onChange={handleChange}
        onClick={props.onClick}
        type="text"
        maxLength={100}
        autoComplete="off"
        className="Input"
        placeholder="后宫嫔妃争宠 | 宫墙柳"
      />
    </div>
  )
}

export default Input
