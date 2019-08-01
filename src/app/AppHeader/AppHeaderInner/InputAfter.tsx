import React from 'react'
import SearchIcon from '../../../svg/SearchIcon'

interface InputAfterProps {
  handleClick: () => void
}

const InputAfter: React.FC<InputAfterProps> = props => {
  const handleClick: React.ReactEventHandler = e => {
    e.preventDefault()
    props.handleClick()
  }

  return (
    <div className="Input-after">
      <button
        className="Button SearchBar-searchIcon Button--primary"
        onClick={handleClick}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          &#8203;
          <SearchIcon />
        </span>
      </button>
    </div>
  )
}

export default InputAfter
